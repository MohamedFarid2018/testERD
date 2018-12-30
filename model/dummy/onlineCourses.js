{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "course_name": {
        "type": "String"
    },
    "course_lang": {
        "type": "String"
    },
    "course_cat": {
        "type": "String"
    },
    "student_count": {
        "type": "Number"
    },
    "state": {
        "type": "String",
        "enum": [
            "",
            ""
        ]
    },
    "course_image": {
        "type": "String"
    },
    "is_seq": {
        "type": "String"
    },
    "surveys": {
        "before": {
            "type": "Schema.Types.ObjectId"
        },
        "after": {
            "type": "Schema.Types.ObjectId"
        }
    },
    "hash": {
        "type": "String"
    },
    "reviewable_certifcate": {
        "type": "String"
    },
    "certificate_on": {
        "type": "String"
    },
    "grade_to": {
        "type": "String"
    },
    "created_at": {
        "type": "Date"
    },
    "avg_rate": {
        "type": "Number"
    },
    "rate": [
        {
            "user_id": {
                "type": "Schema.Types.ObjectId"
            },
            "text": {
                "type": "String"
            },
            "rate": {
                "type": "Number"
            }
        }
    ],
    "lessons": [
        {
            "less_name": {
                "type": "String"
            },
            "student_src": {
                "type": "String"
            },
            "local_src": {
                "type": "String"
            },
            "summary": {
                "type": "String"
            },
            "created_at": {
                "type": "Date"
            },
            "lesson_id": {
                "type": "Schema.Types.ObjectId"
            }
        }
    ],
    "users": [
        {
            "userId": {
                "type": "Schema.Types.ObjectId"
            },
            "quizes": [
                {
                    "type": "Schema.Types.Mixed"
                }
            ],
            "progress": {
                "type": "Number",
                "default": 0
            },
            "created_at": {
                "type": "Date"
            },
            "lesson": [
                {
                    "lessonId": {
                        "type": "Schema.Types.ObjectId"
                    },
                    "progress": {
                        "type": "Number",
                        "default": 0
                    }
                }
            ]
        }
    ],
    "quizes": [
        {
            "Quiz": {
                "type": "Schema.Types.ObjectId"
            },
            "date": {
                "type": "Date"
            },
            "title": {
                "type": "String"
            }
        }
    ],
    "BeforeExam": {
        "type": "Schema.Types.ObjectId"
    },
    "AfterExam": {
        "type": "Schema.Types.ObjectId"
    }
}