{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "tag": {
        "type": "String"
    },
    "user": {
        "User": {
            "type": "Schema.Types.ObjectId"
        },
        "name": {
            "type": "String"
        }
    },
    "created_at": {
        "type": "Date"
    },
    "entity": {
        "level": {
            "type": "Number",
            "min": 0
        },
        "Entity": {
            "type": "Schema.Types.ObjectId"
        },
        "name": {
            "type": "String"
        }
    },
    "status": {
        "type": "String",
        "enum": [
            "waiting_evaluation",
            "evaluated"
        ]
    }
}