{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "name": {
        "type": "String"
    },
    "degree": {
        "type": "Number"
    },
    "dates": [
        {
            "type": "Date"
        }
    ],
    "loop_period": {
        "type": "String",
        "enum": [
            "week",
            "month",
            "year"
        ]
    },
    "percentage": {
        "type": "Number",
        "max": 100,
        "min": 1
    },
    "manual": {
        "type": "Boolean"
    },
    "exam_bot": {
        "type": "String",
        "enum": [
            "ejaby",
            "kb",
            "training",
            "need"
        ]
    },
    "question_bot": {
        "type": "String",
        "enum": [
            "ejaby",
            "kb",
            "training",
            "need"
        ]
    }
}