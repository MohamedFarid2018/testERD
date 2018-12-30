{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "type": {
        "type": "String",
        "enum": [
            "skill",
            "competency",
            "target"
        ]
    },
    "un_read_messages": {
        "type": "Number",
        "min": 1
    },
    "name": {
        "type": "String",
        "maxlength": 100,
        "minlength": 1
    },
    "description": {
        "type": "String",
        "maxlength": 500,
        "minlength": 3
    },
    "User": {
        "type": "Schema.Types.ObjectId"
    },
    "official_evaluation": {
        "mid": {
            "power_points": {
                "type": "String",
                "maxlength": 500,
                "minlength": 3
            },
            "weak_points": {
                "type": "String",
                "maxlength": 500,
                "minlength": 3
            },
            "department_recommendation": {
                "type": "String"
            },
            "department_manager_notes": {
                "type": "String"
            },
            "employee_notes": {
                "type": "String"
            },
            "score": {
                "type": "Number"
            }
        },
        "final": {
            "power_points": {
                "type": "String",
                "maxlength": 500,
                "minlength": 3
            },
            "weak_points": {
                "type": "String",
                "maxlength": 500,
                "minlength": 3
            },
            "department_recommendation": {
                "type": "String"
            },
            "department_manager_notes": {
                "type": "String"
            },
            "employee_notes": {
                "type": "String"
            },
            "score": {
                "type": "Number"
            }
        }
    },
    "sooty_evaluation": {
        "type": "Number"
    },
    "tags": [
        {
            "type": "String"
        }
    ],
    "Ref": {
        "type": "Schema.Types.ObjectId"
    },
    "hr_note": {
        "type": "String"
    },
    "hr_general_note": {
        "type": "String"
    },
    "status": {
        "type": "String",
        "enum": [
            "inprogress",
            "done"
        ]
    },
    "employee_evaluation": {
        "type": "Number",
        "max": 5,
        "min": 0
    },
    "manager_evaluation": {
        "type": "Number",
        "max": 5,
        "min": 0
    },
    "year": {
        "type": "Number",
        "max": 2200,
        "min": 2000
    },
    "level": {
        "type": "Number",
        "min": 0
    },
    "core": {
        "type": "String"
    },
    "indicator": {
        "type": "String"
    }
}