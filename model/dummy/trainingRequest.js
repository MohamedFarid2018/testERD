{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "plan_course": {
        "name": {
            "type": "String",
            "minlength": 3,
            "maxlength": 200
        },
        "PlanCourse": {
            "type": "Schema.Types.ObjectId"
        },
        "date": {
            "type": "String"
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
    },
    "user": {
        "User": {
            "type": "Schema.Types.ObjectId"
        }
    }
}