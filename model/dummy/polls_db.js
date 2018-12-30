{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "tag": {
        "type": "String"
    },
    "created_at": {
        "type": "Date"
    },
    "asked_user": {
        "AskedUser": {
            "type": "Schema.Types.ObjectId"
        },
        "position": {
            "type": "String"
        },
        "name": {
            "type": "String"
        }
    },
    "selected_user": {
        "SelectedUser": {
            "type": "Schema.Types.ObjectId"
        },
        "name": {
            "type": "String"
        },
        "position": {
            "type": "String"
        }
    },
    "poll": {
        "question": {
            "type": "String",
            "required": true
        },
        "Poll": {
            "type": "Schema.Types.ObjectId"
        }
    },
    "permission": {
        "type": "String",
        "enum": [
            "secret",
            "requested",
            "granted",
            "declined"
        ]
    }
}