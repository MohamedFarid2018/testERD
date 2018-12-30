{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "name": {
        "type": "String"
    },
    "topics": [
        {
            "type": {
                "type": "String",
                "enum": [
                    "exam",
                    "course",
                    "article",
                    "mission"
                ]
            },
            "status": {
                "type": "String",
                "enum": [
                    "new",
                    "progress",
                    "exam_pending",
                    "done"
                ]
            },
            "exam": {
                "name": {
                    "type": "String"
                },
                "description": {
                    "type": "String"
                },
                "questions": [
                    {
                        "question": {
                            "type": "String"
                        },
                        "choices": [
                            {
                                "type": "String"
                            }
                        ],
                        "correct_answer": {
                            "type": "Number"
                        },
                        "selected_answer": {
                            "type": "Number"
                        }
                    }
                ]
            },
            "source": {
                "name": {
                    "type": "String"
                },
                "description": {
                    "type": "String"
                },
                "time_needed": {
                    "type": "String"
                },
                "Ref": {
                    "type": "Schema.Types.ObjectId"
                }
            }
        }
    ],
    "period": {
        "type": "Number"
    },
    "Employee": {
        "type": "Schema.Types.ObjectId"
    },
    "stage": {
        "type": "Number",
        "min": 1,
        "max": 10
    },
    "stage_wait_duration": {
        "type": "Number",
        "min": 1
    },
    "start_date": {
        "type": "Date"
    },
    "diagnosis_result": [
        {
            "type": "Number"
        }
    ],
    "year": {
        "type": "Number",
        "min": 2000,
        "max": 2200
    }
}