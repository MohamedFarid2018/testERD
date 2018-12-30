{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "name": {
        "type": "String"
    },
    "job_titles": [
        {
            "name": {
                "type": "String"
            },
            "JobTitle": {
                "type": "Schema.Types.ObjectId"
            }
        }
    ],
    "job_title_degree": {
        "type": "Number",
        "max": 16,
        "min": 1
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
    "target_level": {
        "type": "String"
    }
}