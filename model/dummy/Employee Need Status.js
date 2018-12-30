{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "Employee": {
        "type": "Schema.Types.ObjectId"
    },
    "current_job_title": {
        "type": "String"
    },
    "upcomming_job_title": {
        "type": "String"
    },
    "current_level": {
        "type": "String"
    },
    "upcoming_level": {
        "type": "String"
    },
    "current_level_targets": [
        {
            "name": {
                "type": "String"
            },
            "description": {
                "type": "String"
            },
            "status": {
                "type": "String",
                "enum": [
                    "inprogress",
                    "done"
                ]
            },
            "Evaluation": {
                "type": "Schema.Types.ObjectId"
            }
        }
    ],
    "upcoming_level_targets": [
        {
            "name": {
                "type": "String"
            },
            "description": {
                "type": "String"
            },
            "status": {
                "type": "String",
                "enum": [
                    "inprogress",
                    "done"
                ]
            },
            "Evaluation": {
                "type": "Schema.Types.ObjectId"
            }
        }
    ]
}