{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "name": {
        "type": "String"
    },
    "job_group": {
        "JobGroup": {
            "type": "Schema.Types.ObjectId"
        },
        "name": {
            "type": "String"
        }
    },
    "mandotory_competencies": [
        {
            "name": {
                "type": "String"
            },
            "Competency": {
                "type": "Schema.Types.ObjectId"
            }
        }
    ],
    "additional_competencies": [
        {
            "name": {
                "type": "String"
            },
            "Competency": {
                "type": "Schema.Types.ObjectId"
            }
        }
    ]
}