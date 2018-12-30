{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "title": {
        "type": "String",
        "minlength": 3,
        "maxlength": 200
    },
    "start_date": {
        "type": "Date"
    },
    "end_date": {
        "type": "Date"
    },
    "quarterly": {
        "type": "String",
        "default": "first",
        "enum": [
            "first",
            "second",
            "third",
            "forth"
        ]
    },
    "Supervisor": {
        "type": "Schema.Types.ObjectId"
    },
    "notes": {
        "type": "String",
        "minlength": 3,
        "maxlength": 500
    },
    "price": {
        "type": "Number",
        "min": 0
    },
    "location": {
        "type": "String",
        "minlength": 3,
        "maxlength": 50
    },
    "approval": {
        "type": "String"
    },
    "attachment": {
        "type": "String",
        "minlength": 3,
        "maxlength": 200
    },
    "duration": {
        "type": "String",
        "minlength": 1,
        "maxlength": 5
    },
    "host_request": {
        "type": "Boolean",
        "default": false
    },
    "objectives": [
        {
            "type": "String",
            "minlength": 3,
            "maxlength": 500
        }
    ],
    "targeted_audiences": {
        "type": "String",
        "minlength": 3,
        "maxlength": 50
    },
    "phone": {
        "type": "String",
        "minlength": 8,
        "maxlength": 14
    },
    "state": {
        "type": "String",
        "default": "pending",
        "enum": [
            "pending",
            "approved",
            "rejected"
        ]
    },
    "number_of_participants": {
        "type": "Number",
        "min": 0
    },
    "photo": {
        "type": "String",
        "minlength": 3,
        "maxlength": 500
    },
    "time": {
        "from": {
            "type": "String",
            "minlength": 1,
            "maxlength": 5
        },
        "to": {
            "type": "String",
            "minlength": 1,
            "maxlength": 5
        }
    },
    "standards": [
        {
            "type": "String",
            "minlength": 3,
            "maxlength": 50
        }
    ],
    "badges": [
        {
            "Badge": {
                "type": "Schema.Types.ObjectId"
            },
            "title": {
                "type": "String",
                "minlength": 3,
                "maxlength": 50
            },
            "image_in_active": {
                "type": "String",
                "minlength": 3,
                "maxlength": 500
            },
            "image_active": {
                "type": "String",
                "minlength": 3,
                "maxlength": 500
            }
        }
    ],
    "institution": {
        "Institution": {
            "type": "Schema.Types.ObjectId"
        },
        "name": {
            "type": "String",
            "minlength": 3,
            "maxlength": 50
        }
    },
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
    "requested_user": {
        "name": {
            "type": "String",
            "minlength": 3,
            "maxlength": 50
        },
        "User": {
            "type": "Schema.Types.ObjectId"
        }
    },
    "attendance": {
        "rate": {
            "type": "Number",
            "min": 0,
            "max": 100
        },
        "delay_rate": {
            "type": "Number",
            "min": 0,
            "max": 100
        }
    },
    "certificates": [
        {
            "Certificate": {
                "type": "Schema.Types.ObjectId"
            },
            "title": {
                "type": "String",
                "minlength": 3,
                "maxlength": 50
            },
            "image_in_active": {
                "type": "String",
                "minlength": 3,
                "maxlength": 500
            },
            "image_active": {
                "type": "String",
                "minlength": 3,
                "maxlength": 500
            }
        }
    ]
}