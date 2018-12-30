import { kbEnums } from '../../shared/enums';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kbSchema = new Schema({
  title: String,
  author: String,
  image: String,
  published_date: Date,
  current_content: String,
  original_content: String,
  description: String,
  tag: String,
  article_type: {
    type: String,
    enum: Object.values(kbEnums.article_type)
  },
  has_file: {
    type: Boolean,
    default: false
  },
  file_data: {
    name: String,
    type: {
      type: String,
      enum: Object.values(kbEnums.file_data.type)
    }
  },
  publishing_data: {
    by: {
      User: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      name: String
    },
    status: [
      {
        status: {
          type: String,
          default: 'unseen',
          enum: Object.values(kbEnums.published_data.status)
        },
        date: {
          type: Date
        }
      }
    ],
    active_state: {
      type: String,
      enum: Object.values(kbEnums.published_data.active_state)
    },
    note: String
  },
  modification_data: [
    new Schema({
      by: {
        User: {
          type: Schema.Types.ObjectId,
          ref: 'User'
        },
        name: String
      },
      content: String,
      date: Date,
      status: [
        {
          status: {
            type: String,
            default: 'unseen',
            enum: Object.values(kbEnums.modification_data.status)
          },
          date: Date
        }
      ],
      note: String,
      active_state: {
        type: String,
        default: 'unseen',
        enum: Object.values(kbEnums.modification_data.active_state)
      }
    })
  ],
  comments: [
    new Schema({
      User: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      date: Date,
      content: String
    })
  ],
  shares: [
    new Schema({
      By: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      To: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      date: Date,
      notes: String
    })
  ],
  actions: [
    new Schema({
      type: {
        type: String,
        enum: Object.values(kbEnums.action)
      },
      date: Date,
      User: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    })
  ]
});

const organizationPositionSchema = new Schema({
  level: {
    type: Number,
    min: 0
  },
  Parent: {
    type: Schema.Types.ObjectId,
    ref: 'OrganizationPosition'
  },
  name: String,
  employees: [
    new Schema({
      User: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      rank: {
        type: Number,
        min: 0,
        max: 2
      }
    })
  ],
  articles_stats: {
    reads: {
      type: Number,
      default: 0
    },
    shared_with: {
      type: Number,
      default: 0
    },
    shares: {
      type: Number,
      default: 0
    },
    comments: {
      type: Number,
      default: 0
    },
    modifies: {
      type: Number,
      default: 0
    },
    publishes: {
      type: Number,
      default: 0
    },
    favorites: {
      type: Number,
      default: 0
    },
    dislikes: {
      type: Number,
      default: 0
    },
    likes: {
      type: Number,
      default: 0
    },
    edits: {
      type: Number
    }
  }
});

const userSchema = new Schema({
  articles: [
    new Schema({
      Article: {
        type: Schema.Types.ObjectId,
        ref: 'Kb'
      },
      behavior: {
        read: {
          type: Number,
          default: 0
        },
        reading: {
          status: {
            type: Number,
            default: 0
          },
          position: String
        },
        liked: {
          type: Number,
          default: 0
        },
        disliked: {
          type: Number,
          default: 0
        },
        favorite: {
          type: Number,
          default: 0
        },
        pinned: {
          type: Number,
          default: 0
        },
        published: {
          type: Number,
          default: 0
        },
        modified: {
          type: Number,
          default: 0
        },
        comment: {
          type: Number,
          default: 0
        },
        shared: [
          {
            User: {
              type: Schema.Types.ObjectId,
              ref: 'User'
            },
            status: {
              type: Number,
              default: 0
            },
            note: {
              type: String
            }
          }
        ],
        shared_with: [
          {
            User: {
              type: Schema.Types.ObjectId,
              ref: 'User'
            },
            status: {
              type: Number,
              default: 0
            },
            note: {
              type: String
            }
          }
        ]
      }
    })
  ],
  articles_stats: {
    reads: {
      type: Number,
      default: 0
    },
    shared_with: {
      type: Number,
      default: 0
    },
    shares: {
      type: Number,
      default: 0
    },
    comments: {
      type: Number,
      default: 0
    },
    modifies: {
      type: Number,
      default: 0
    },
    publishes: {
      type: Number,
      default: 0
    },
    favorites: {
      type: Number,
      default: 0
    },
    dislikes: {
      type: Number,
      default: 0
    },
    likes: {
      type: Number,
      default: 0
    },
    edits: {
      type: Number
    },
    accepted_publishes: {
      type: Number,
      default: 0
    },
    declined_publishes: {
      type: Number,
      default: 0
    }
  }
});

module.exports.kbSchema = mongoose.model('Kb', kbSchema);
module.exports.User = mongoose.model('User', userSchema);
module.exports.OrganizationPosition = mongoose.model(
  'OrganizationPosition',
  organizationPositionSchema
);
