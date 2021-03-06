# -*- coding: utf-8 -*-
#
# Copyright (C) 2019 CERN.
#
# inspirehep is free software; you can redistribute it and/or modify it under
# the terms of the MIT License; see LICENSE file for more details.
from inspirehep.pidstore.minters.bai import BAIMinter

from ..minters.control_number import AuthorsMinter
from ..minters.orcid import OrcidMinter
from .base import PidStoreBase


class PidStoreAuthors(PidStoreBase):

    minters = [AuthorsMinter, OrcidMinter, BAIMinter]
