{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "level": {
        "type": "Number",
        "min": 0
    },
    "Parent": {
        "type": "Schema.Types.ObjectId"
    },
    "name": {
        "type": "String"
    },
    "employees": [
        {
            "User": {
                "type": "Schema.Types.ObjectId"
            },
            "rank": {
                "type": "Number",
                "min": 0,
                "max": 2
            }
        }
    ],
    "articles_stats": {
        "reads": {
            "type": "Number",
            "default": 0
        },
        "shared_with": {
            "type": "Number",
            "default": 0
        },
        "shares": {
            "type": "Number",
            "default": 0
        },
        "comments": {
            "type": "Number",
            "default": 0
        },
        "modifies": {
            "type": "Number",
            "default": 0
        },
        "publishes": {
            "type": "Number",
            "default": 0
        },
        "favorites": {
            "type": "Number",
            "default": 0
        },
        "dislikes": {
            "type": "Number",
            "default": 0
        },
        "likes": {
            "type": "Number",
            "default": 0
        },
        "edits": {
            "type": "Number"
        }
    }
}