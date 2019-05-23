# -*- coding: utf-8 -*-
#
# Copyright (C) 2019 CERN.
#
# inspirehep is free software; you can redistribute it and/or modify it under
# the terms of the MIT License; see LICENSE file for more details.

import json

from invenio_search import current_search_client as es


def test_index_literature_record(es_clear, db, datadir, create_record):
    data = json.loads((datadir / "1630825.json").read_text())
    record = create_record("lit", data=data)

    expected_count = 1
    expected_metadata = json.loads((datadir / "es_1630825.json").read_text())
    expected_metadata_ui_display = json.loads(expected_metadata.pop("_ui_display"))
    expected_metadata.pop("authors")

    response = es.search("records-hep")

    result = response["hits"]["hits"][0]["_source"]
    result_ui_display = json.loads(result.pop("_ui_display"))
    result_authors = result.pop("authors")
    del result["_created"]
    del result["_updated"]

    assert response["hits"]["total"] == expected_count
    assert result == expected_metadata
    assert result_ui_display == expected_metadata_ui_display
