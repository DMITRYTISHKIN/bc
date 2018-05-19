SETTINGS = {
  'RESOURCE_METHODS': ['GET'],
  'ITEM_METHODS': ['GET'],
  'DEBUG': True,
  'MONGO_HOST': 'localhost',
  'MONGO_PORT': 27017,
  'MONGO_PASSWORD': '123456',
  'MONGO_USERNAME': 'bc_r',
  'MONGO_DBNAME': 'db',
  'DOMAIN': {
    'directions': {
      'url': 'api/directions',
      'item_url': 'regex("[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}")',
      'schema': {
        'NAME': {
          'type': 'string',
          'minlength': 5,
          'maxlength': 20
        },
        'NOTE': {
          'type': 'string',
          'maxlength': 100
        }
      }
    },
    'groups': {
      'url': 'api/groups',
      'item_url': 'regex("[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}")',
      'schema': {
        'NAME': {
          'type': 'string',
          'minlength': 5,
          'maxlength': 20
        },
        'NOTE': {
          'type': 'string',
          'maxlength': 100
        },
        'DIRECTION_ID': {
          'type': 'objectid',
          'data_relation': {
            'resource': 'directions',
            'field': '_id',
            'embeddable': True
          }
        }
      }
    },
  }
}
