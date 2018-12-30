{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "name": {
        "type": "String"
    },
    "CompetencyGroup": {
        "type": "Schema.Types.ObjectId"
    },
    "stage": {
        "type": "String",
        "enum": [
            "first",
            "second",
            "third"
        ]
    },
    "stage_wait_duration": {
        "type": "Number"
    },
    "target_audience": {
        "type": "String",
        "enum": [
            "employee",
            "manager",
            "section"
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
    },
    "robot": [
        {
            "robot": {
                "type": "String",
                "enum": [
                    "ejaby",
                    "kb",
                    "need",
                    "training"
                ]
            },
            "treatment": [
                {
                    "type": {
                        "type": "String",
                        "enum": [
                            "images",
                            "courses",
                            "articles",
                            "missions"
                        ]
                    },
                    "hashtags": [
                        {
                            "type": "String"
                        }
                    ]
                }
            ],
            "diagnosis": [
                {
                    "Diagnosis": {
                        "type": "Schema.Types.ObjectId"
                    },
                    "robot": {
                        "type": "String",
                        "enum": [
                            "training",
                            "ejaby",
                            "need",
                            "kb"
                        ]
                    },
                    "hashtag": {
                        "type": "String"
                    }
                }
            ]
        }
    ]
}