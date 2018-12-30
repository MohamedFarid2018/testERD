{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "name": {
        "type": "String",
        "minlength": 3,
        "maxlength": 200
    },
    "AnnualPlan": {
        "type": "Schema.Types.ObjectId"
    },
    "target_audience": {
        "type": "String",
        "minlength": 3,
        "maxlength": 50
    },
    "objectives": [
        {
            "type": "String",
            "minlength": 3,
            "maxlength": 200
        }
    ],
    "instructors": [
        {
            "name": {
                "type": "String",
                "minlength": 3,
                "maxlength": 50
            },
            "Instructor": {
                "type": "Schema.Types.ObjectId"
            },
            "User": {
                "type": "Schema.Types.ObjectId"
            }
        }
    ],
    "location": {
        "type": "String",
        "minlength": 3,
        "maxlength": 200
    },
    "Supervisor": {
        "type": "Schema.Types.ObjectId"
    },
    "date": {
        "type": "Date"
    },
    "time": {
        "type": "String",
        "minlength": 1,
        "maxlength": 5
    },
    "reward": {
        "type": "Number",
        "min": 0
    }
}