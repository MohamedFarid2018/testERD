{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "Employee": {
        "type": "Schema.Types.ObjectId"
    },
    "year": {
        "type": "Number"
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
    "evaluation": {
        "type": {
            "type": "String",
            "enum": [
                "skill",
                "competency",
                "target"
            ]
        },
        "evaluation": {
            "Evaluation": {
                "type": "Schema.Types.ObjectId"
            },
            "name": {
                "type": "String"
            }
        }
    },
    "data": {
        "DirectManager": {
            "type": "Schema.Types.ObjectId"
        },
        "DepartmentManager": {
            "type": "Schema.Types.ObjectId"
        },
        "Section_manager": {
            "type": "Schema.Types.ObjectId"
        },
        "direct_manager_Signed": {
            "type": "String"
        },
        "direct_manager_strength_comments": {
            "type": "String"
        },
        "direct_manager_improvement_comments": {
            "type": "String"
        },
        "department_manager_signed": {
            "type": "String"
        },
        "department_comments": {
            "type": "String"
        },
        "section_manager_signed": {
            "type": "String"
        },
        "section_comments": {
            "type": "String"
        },
        "employee_comments": {
            "type": "String"
        },
        "employee_signed": {
            "type": "String"
        },
        "emplyee_approved_evaluation": {
            "type": "String"
        },
        "hr_general_comments": {
            "type": "String"
        },
        "date": {
            "type": "Date"
        },
        "objectives_percentage": {
            "year_evaluation": {
                "type": "Number"
            },
            "sooty_evaluation": {
                "type": "Number"
            }
        },
        "competencies_percentage": {
            "year_evaluation": {
                "type": "Number"
            },
            "sooty_evaluation": {
                "type": "Number"
            }
        }
    }
}