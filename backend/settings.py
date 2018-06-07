SETTINGS = {
  'RESOURCE_METHODS': ['GET'],
  'ITEM_METHODS': ['GET'],
  'DEBUG': True,
  'MONGO_HOST': 'localhost',
  'MONGO_PORT': 27017,
  'MONGO_PASSWORD': '123456',
  'MONGO_USERNAME': 'bc_r',
  'MONGO_DBNAME': 'db',
  'PAGINATION_DEFAULT': 50,
  'DOMAIN': {
    'directions': {
      'url': 'api/directions',
      'item_url': 'regex("[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}")',
      'schema': {
        'NAME': {
          'type': 'string',
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
    'sections': {
      'url': 'api/sections',
      'max_results': 5,
      'item_url': 'regex("[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}")',
      'schema': {
        'NAME': {
          'type': 'string',
          'maxlength': 20
        },
        'NOTE': {
          'type': 'string',
          'maxlength': 1000
        },
        'DESCRIPTION': {
          'type': 'string',
          'maxlength': 100
        },
        'GROUP_ID': {
          'type': 'objectid',
          'data_relation': {
            'resource': 'groups',
            'field': '_id',
            'embeddable': True
          }
        }
      }
    },
    'themes': {
      'url': 'api/themes',
      'item_url': 'regex("[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}")',
      'schema': {
        'NAME': {
          'type': 'string',
          'maxlength': 20
        },
      }
    },
    'projects': {
      'url': 'api/projects',
      'item_url': 'regex("[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}")',
      'schema': {
        'NAME': {
          'type': 'string',
          'maxlength': 20,
          'text': 'true'
        },
        'NOTE': {
          'type': 'string',
          'maxlength': 1000
        },
        'DESCRIPTION': {
          'type': 'string',
          'maxlength': 100
        },
        'ARTICLE': {
          'type': 'string',
          'maxLength': 15
        },
        'IMAGES': {
          'type': 'string'
        },
        'PREVIEW_IMAGE': {
          'type': 'string'
        },
        'THEME_ID': {
          'type': 'objectid',
          'data_relation': {
            'resource': 'themes',
            'field': '_id',
            'embeddable': True
          }
        },
        'SECTION_ID': {
          'type': 'objectid',
          'data_relation': {
            'resource': 'sections',
            'field': '_id',
            'embeddable': True
          }
        }
      }
    },
    'projectsSimilar': {
      'url': 'api/projectsSimilar',
      'datasource':{
        'source' : 'projects',
        'aggregation' : {
          'pipeline': [{
            '$match': {
              'SECTION_ID': '$section',
            }
          },
          {
            '$sample': {
              'size': 3
            }
          },
          {
            '$lookup': {
              'from': 'themes',
              'foreignField': '_id',
              'localField': 'THEME_ID',
              'as': 'theme'
            }
          },
          {
            '$lookup': {
              'from': 'sections',
              'foreignField': '_id',
              'localField': 'SECTION_ID',
              'as': 'section'
            }
          }]
        }
      }
    },
    'search': {
      'url': 'api/search',
      'schema': {
        'NAME': {
          'type': 'string',
          'maxlength': 20,
          'text': 'true'
        },
        'NOTE': {
          'type': 'string',
          'maxlength': 1000
        },
        'DESCRIPTION': {
          'type': 'string',
          'maxlength': 100
        },
        'ARTICLE': {
          'type': 'string',
          'maxLength': 15
        },
        'IMAGES': {
          'type': 'string'
        },
        'PREVIEW_IMAGE': {
          'type': 'string'
        },
        'THEME_ID': {
          'type': 'objectid',
          'data_relation': {
            'resource': 'themes',
            'field': '_id',
            'embeddable': True
          }
        },
        'SECTION_ID': {
          'type': 'objectid',
          'data_relation': {
            'resource': 'sections',
            'field': '_id',
            'embeddable': True
          }
        }
      },
      'datasource':{
        'source' : 'projects',
        'aggregation' : {
          'pipeline': [{
            '$match': {
              '$text': {
                '$search': "$textSearch"
              }
            }
          },
          {
            '$lookup': {
              'from': 'themes',
              'foreignField': '_id',
              'localField': 'THEME_ID',
              'as': 'theme'
            }
          },
          {
            '$lookup': {
              'from': 'sections',
              'foreignField': '_id',
              'localField': 'SECTION_ID',
              'as': 'section'
            }
          }]
        }
      }
    },
    'themesContain': {
      'url': 'api/themesContain',
      'datasource':{
        'source': 'projects',
        'aggregation': {
          'pipeline': [{
            '$match': {
              'SECTION_ID': '$section'
            }
          },
          {
            '$group': {
              '_id': '$THEME_ID',
              'count': {
                '$sum': 1
              }
            }
          },
          {
            '$lookup': {
              'from': 'themes',
              'foreignField': '_id',
              'localField': '_id',
              'as': 'theme'
            }
          }]
        }
      }
    },
    'themesContainAll': {
      'url': 'api/themesContainAll',
      'datasource':{
        'source': 'projects',
        'aggregation': {
          'pipeline': [{
            '$group': {
              '_id': '$THEME_ID',
              'count': {
                '$sum': 1
              }
            }
          },
          {
            '$lookup': {
              'from': 'themes',
              'foreignField': '_id',
              'localField': '_id',
              'as': 'theme'
            }
          }]
        }
      }
    },
    'sectionsContain': {
      'url': 'api/sectionsContain',
      'datasource':{
        'source' : 'projects',
        'aggregation' : {
          'pipeline': [{
            '$group' : {
              '_id':'$SECTION_ID',
              'count' : {
                '$sum' : 1
              }
            }
          },
          {
            '$lookup': {
              'from': 'sections',
              'foreignField': '_id',
              'localField': '_id',
              'as': 'group'
            }
          }]
        }
      }
    }
  }
}
