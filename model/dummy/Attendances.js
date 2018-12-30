{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "User": {
        "type": "Schema.Types.ObjectId"
    },
    "Ref": {
        "type": "Schema.Types.ObjectId"
    },
    "type": {
        "type": "String",
        "enum": [
            "workshop",
            "course"
        ]
    },
    "attendances": [
        {
            "date": {
                "type": "Date"
            },
            "attend_time": {
                "type": "String",
                "minlength": 1,
                "maxlength": 5
            },
            "leave_time": {
                "type": "String",
                "minlength": 1,
                "maxlength": 5
            },
            "leave_reason": {
                "type": "String",
                "minlength": 3,
                "maxlength": 200
            },
            "delay": {
                "type": "Number"
            },
            "attend": {
                "student": {
                    "type": "Boolean",
                    "default": false
                },
                "supervisor": {
                    "type": "Boolean",
                    "default": false
                }
            }
        }
    ]
}