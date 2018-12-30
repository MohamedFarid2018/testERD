{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "type": {
        "type": "String",
        "minlength": 3,
        "maxlength": 50
    },
    "mission_type": {
        "type": "String",
        "minlength": 3,
        "maxlength": 50
    },
    "leave_date": {
        "type": "Date"
    },
    "back_date": {
        "type": "Date"
    },
    "attachment": {
        "type": "String",
        "minlength": 5,
        "maxlength": 500
    },
    "accomodation": {
        "type": "Boolean",
        "default": false
    },
    "transportation": {
        "type": "Boolean",
        "default": false
    },
    "notes": {
        "type": "String",
        "minlength": 3,
        "maxlength": 500
    },
    "course": {
        "Course": {
            "type": "Schema.Types.ObjectId"
        },
        "start_date": {
            "type": "Date"
        },
        "end_date": {
            "type": "Date"
        }
    },
    "user": {
        "User": {
            "type": "Schema.Types.ObjectId"
        },
        "job_title": {
            "type": "String",
            "minlength": 3,
            "maxlength": 50
        },
        "name": {
            "type": "String",
            "minlength": 3,
            "maxlength": 50
        },
        "profile_picture": {
            "type": "String",
            "minlength": 5,
            "maxlength": 500
        }
    }
}