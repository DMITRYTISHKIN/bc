# -*- coding: utf-8 -*-

from eve import Eve
from settings import SETTINGS
from encoder import UUIDEncoder

app = Eve(
    auth = None,
    settings = SETTINGS
)

if __name__ == '__main__':
    app.run()
