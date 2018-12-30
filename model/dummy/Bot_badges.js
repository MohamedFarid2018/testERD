{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "message_on_recieve": {
        "type": "String"
    },
    "badge_for": {
        "type": "String",
        "enum": [
            "ejabi",
            "survey",
            "kb"
        ]
    },
    "is_forever": {
        "type": "Boolean"
    },
    "activty_type": {
        "type": "String",
        "enum": [
            "played",
            "take survey"
        ]
    },
    "badge_type": {
        "type": "String",
        "enum": [
            "automatic",
            "manual"
        ]
    },
    "inactive_image": {
        "type": "String"
    },
    "number_of_days_expected": {
        "type": "Number"
    },
    "number_of_completion_task_expected": {
        "type": "Number"
    },
    "Users": [
        {
            "type": "Schema.Types.ObjectId"
        }
    ],
    "badge": {
        "Badge": {
            "type": "Schema.Types.ObjectId"
        },
        "title": {
            "type": "String"
        }
    },
    "conditions": [
        {
            "action_type": {
                "type": "String",
                "enum": [
                    "read",
                    "edit"
                ]
            },
            "count": {
                "type": "Number"
            }
        }
    ],
    "bot": {
        "type": "String",
        "enum": [
            "ejabi",
            "kb",
            "training"
        ]
    }
}