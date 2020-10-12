# -*- coding: utf-8 -*-
#
# Copyright (C) 2020 CERN.
#
# inspirehep is free software; you can redistribute it and/or modify it under
# the terms of the MIT License; see LICENSE file for more details.

from helpers.utils import create_record
from inspire_utils.record import get_value

from inspirehep.matcher.tasks import match_references_by_uuids
from inspirehep.records.api import LiteratureRecord


def test_match_references_by_uuids(inspire_app):
    cited_data = {
        "document_type": ["article"],
        "dois": [{"value": "10.1371/journal.pone.0188398"}],
    }
    cited_record = create_record("lit", data=cited_data)

    citer_data = {
        "references": [{"reference": {"dois": ["10.1371/journal.pone.0188398"]}}]
    }
    citer_record = create_record("lit", data=citer_data)
    excluded_citer_record = create_record("lit", data=citer_data)  # won't be passed

    record_without_references = create_record("lit")

    match_references_by_uuids([str(citer_record.id), str(record_without_references.id)])

    updated_citer_record = LiteratureRecord.get_record(citer_record.id)
    excluded_citer_record = LiteratureRecord.get_record(excluded_citer_record.id)

    assert (
        get_value(updated_citer_record, "references[0].record") == cited_record["self"]
    )
    assert "record" not in get_value(excluded_citer_record, "references[0]")