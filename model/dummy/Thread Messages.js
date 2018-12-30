{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "message": {
        "type": "String",
        "maxlength": 500,
        "minlength": 1
    },
    "Sender": {
        "type": "Schema.Types.ObjectId"
    },
    "Reciever": {
        "type": "Schema.Types.ObjectId"
    },
    "type": {
        "type": "String",
        "enum": [
            "text",
            "file"
        ]
    },
    "date": {
        "type": "Date"
    },
    "Evaluation": {
        "type": "Schema.Types.ObjectId"
    },
    "is_read": {
        "type": "Boolean"
    }
}