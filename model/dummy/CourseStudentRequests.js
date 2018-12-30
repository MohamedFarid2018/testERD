{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "status": {
        "type": "String",
        "default": "pending",
        "enum": [
            "pending",
            "hr_pending",
            "hr_manager_pending",
            "accepted"
        ]
    },
    "course": {
        "Course": {
            "type": "Schema.Types.ObjectId"
        },
        "start_date": {
            "type": "Date"
        },
        "name": {
            "type": "String",
            "minlength": 3,
            "maxlength": 50
        },
        "institution": {
            "name": {
                "type": "String",
                "minlength": 3,
                "maxlength": 200
            },
            "Institution": {
                "type": "Schema.Types.ObjectId"
            }
        },
        "instructor": {
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
        },
        "course_type": {
            "type": "String",
            "minlength": 3,
            "maxlength": 50
        },
        "objectives": [
            {
                "type": "String",
                "minlength": 3,
                "maxlength": 500
            }
        ]
    },
    "applied_user": {
        "User": {
            "type": "Schema.Types.ObjectId"
        },
        "name": {
            "type": "String",
            "minlength": 3,
            "maxlength": 50
        },
        "jobTitle": {
            "type": "String",
            "minlength": 3,
            "maxlength": 50
        },
        "id": {
            "type": "String",
            "minlength": 3,
            "maxlength": 15
        },
        "hire_date": {
            "type": "Date"
        },
        "completed_courses": {
            "type": "Number",
            "min": 0
        },
        "rating": {
            "type": "Number",
            "min": 0,
            "max": 5
        },
        "hours": {
            "type": "String",
            "minlength": 1,
            "maxlength": 5
        },
        "degree": {
            "type": "Number",
            "min": 0,
            "max": 100
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
        }
    },
    "manager_decision": {
        "status": {
            "type": "String",
            "enum": [
                "accepted",
                "declined"
            ]
        },
        "manager_suggestion": {
            "User": {
                "type": "Schema.Types.ObjectId"
            },
            "name": {
                "type": "String",
                "minlength": 3,
                "maxlength": 200
            }
        }
    },
    "hr_decision": {
        "status": {
            "type": "String",
            "enum": [
                "accepted",
                "declined"
            ]
        },
        "hr_descision": {
            "User": {
                "type": "Schema.Types.ObjectId"
            },
            "name": {
                "type": "String",
                "minlength": 3,
                "maxlength": 200
            }
        }
    },
    "hr_manager_decision": {
        "status": {
            "type": "String",
            "enum": [
                "accepted",
                "declined"
            ]
        }
    },
    "suggested_users": [
        {
            "User": {
                "type": "Schema.Types.ObjectId"
            },
            "name": {
                "type": "String",
                "minlength": 3,
                "maxlength": 50
            }
        }
    ],
    "refuseReason": {
        "type": "String",
        "minlength": 3,
        "maxlength": 500
    }
}