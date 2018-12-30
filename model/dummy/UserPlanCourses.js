{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "AnnualPlan": {
        "type": "Schema.Types.ObjectId"
    },
    "User": {
        "type": "Schema.Types.ObjectId"
    },
    "suggested_plan_courses": [
        {
            "name": {
                "type": "String",
                "minlength": 3,
                "maxlength": 200
            },
            "PlanCourse": {
                "type": "Schema.Types.ObjectId"
            }
        }
    ],
    "status": {
        "type": "String",
        "default": "emp_edit",
        "enum": [
            "emp_edit",
            "emp_approval",
            "manager_edit",
            "manager_approval",
            "hr_edit",
            "hr_approval"
        ]
    },
    "manager_decision": {
        "suggestion": [
            {
                "name": {
                    "type": "String",
                    "minlength": 3,
                    "maxlength": 200
                },
                "PlanCourse": {
                    "type": "Schema.Types.ObjectId"
                }
            }
        ],
        "approval": {
            "type": "Boolean",
            "default": false
        },
        "suggestion_date": {
            "type": "Date"
        },
        "action_date": {
            "type": "Date"
        }
    },
    "hr_decision": {
        "suggestion": [
            {
                "name": {
                    "type": "String",
                    "minlength": 3,
                    "maxlength": 200
                },
                "PlanCourse": {
                    "type": "Schema.Types.ObjectId"
                }
            }
        ],
        "approval": {
            "type": "Boolean",
            "default": false
        },
        "suggestion_date": {
            "type": "Date"
        },
        "action_date": {
            "type": "Date"
        }
    },
    "user_decision": {
        "suggestion": [
            {
                "name": {
                    "type": "String",
                    "minlength": 3,
                    "maxlength": 200
                },
                "PlanCourse": {
                    "type": "Schema.Types.ObjectId"
                }
            }
        ],
        "approval": {
            "type": "Boolean",
            "default": false
        },
        "suggestion_date": {
            "type": "Date"
        },
        "action_date": {
            "type": "Date"
        }
    }
}