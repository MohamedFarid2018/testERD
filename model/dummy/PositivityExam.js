{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "title": {
        "type": "String"
    },
    "questions": [
        {
            "question": {
                "type": "String"
            },
            "answers": [
                {
                    "answer": {
                        "type": "String"
                    },
                    "value": {
                        "type": "Number"
                    }
                }
            ]
        }
    ],
    "users": [
        {
            "final_degree": {
                "type": "Number"
            },
            "level": {
                "type": "String"
            },
            "User": {
                "type": "Schema.Types.ObjectId"
            },
            "name": {
                "type": "String"
            },
            "position": {
                "type": "String"
            }
        }
    ]
}