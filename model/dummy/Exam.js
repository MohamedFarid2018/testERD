{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "title": {
        "type": "String"
    },
    "questions": [
        {
            "Question": {
                "type": "Schema.Types.ObjectId"
            },
            "question": {
                "type": "String"
            },
            "choices": [
                {
                    "type": "String"
                }
            ],
            "correct_answer": {
                "type": "String"
            }
        }
    ]
}