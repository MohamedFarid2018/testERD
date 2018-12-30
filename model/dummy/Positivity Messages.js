{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "Sender": {
        "type": "Schema.Types.ObjectId"
    },
    "Receiver": {
        "type": "Schema.Types.ObjectId"
    },
    "message": {
        "type": "String"
    },
    "type": {
        "type": "String",
        "enum": [
            "thank you",
            "congrates",
            "positive message",
            "good job",
            "do you need help?"
        ]
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
    }
}