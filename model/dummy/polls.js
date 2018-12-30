{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "question": {
        "type": "String",
        "required": true
    },
    "language": {
        "type": "String",
        "enum": [
            "ar",
            "en"
        ]
    },
    "color": {
        "type": "String"
    },
    "tag": {
        "type": "String"
    },
    "question_type": {
        "type": "String"
    },
    "created_at": {
        "type": "Date"
    }
}