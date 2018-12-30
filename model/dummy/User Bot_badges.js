{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "User": {
        "type": "Schema.Types.ObjectId"
    },
    "action": {
        "type": {
            "type": "String",
            "enum": [
                "read",
                "fav"
            ]
        },
        "date": {
            "type": "Date"
        }
    },
    "bot": {
        "type": {
            "type": "String",
            "enum": [
                "ejabi",
                "kb",
                "training",
                "survey"
            ]
        },
        "BotBadge": {
            "type": "Schema.Types.ObjectId"
        }
    }
}