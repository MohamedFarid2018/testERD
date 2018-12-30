{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "requester": {
        "name": {
            "type": "String"
        },
        "job_title": {
            "type": "String"
        },
        "job_degree": {
            "type": "String"
        },
        "Requester": {
            "type": "Schema.Types.ObjectId"
        }
    },
    "evaluation": {
        "name": {
            "type": "String"
        },
        "Evaluation": {
            "type": "Schema.Types.ObjectId"
        }
    }
}