{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "name": {
        "type": "String",
        "minlength": 3,
        "maxlength": 500,
        "required": true
    },
    "Supervisor": {
        "type": "Schema.Types.ObjectId"
    },
    "start_date": {
        "type": "Date"
    },
    "end_date": {
        "type": "Date"
    },
    "duration": {
        "type": "String"
    },
    "status": {
        "type": "String",
        "default": "in_active",
        "enum": [
            "active",
            "in_active",
            "live"
        ],
        "required": true
    },
    "photo": {
        "type": "String",
        "minlength": 3,
        "maxlength": 300
    },
    "location": {
        "type": "String",
        "minlength": 3,
        "maxlength": 100
    },
    "objectives": [
        {
            "type": "String",
            "minlength": 3,
            "maxlength": 500
        }
    ],
    "content": [
        {
            "type": "String",
            "minlength": 3,
            "maxlength": 500
        }
    ],
    "course_type": {
        "type": "String",
        "minlength": 3,
        "maxlength": 150
    },
    "roi": {
        "type": "Number"
    },
    "course_progress": {
        "type": "Number",
        "min": 0,
        "max": 100,
        "default": 0
    },
    "rating": {
        "total_rate": {
            "type": "Number",
            "min": 0,
            "max": 5
        },
        "number_of_rates": {
            "type": "Number",
            "min": 0,
            "default": 0
        }
    },
    "students": [
        {
            "Student": {
                "type": "Schema.Types.ObjectId",
                "required": true
            },
            "course_rate": {
                "rate": {
                    "type": "Number",
                    "min": 0,
                    "max": 5,
                    "default": 0
                },
                "CourseRate": {
                    "type": "Schema.Types.ObjectId"
                }
            },
            "before_test": {
                "degree": {
                    "type": "Number",
                    "min": 0,
                    "max": 100
                }
            },
            "after_test": {
                "degree": {
                    "type": "Number",
                    "min": 0,
                    "max": 100
                }
            },
            "attendance": {
                "attendance_rate": {
                    "type": "Number",
                    "min": 0,
                    "max": 100,
                    "default": 0
                },
                "number_of_rates": {
                    "type": "Number",
                    "min": 0,
                    "default": 0
                },
                "Attendance": {
                    "type": "Schema.Types.ObjectId"
                }
            }
        }
    ],
    "exam": {
        "before": {
            "name": {
                "type": "String",
                "minlength": 3,
                "maxlength": 500
            },
            "questions": [
                {
                    "question": {
                        "type": "String",
                        "minlength": 3,
                        "maxlength": 200
                    },
                    "choices": [
                        {
                            "type": "String",
                            "minlength": 3,
                            "maxlength": 200
                        }
                    ],
                    "correct_answer": {
                        "type": "Number",
                        "min": 0,
                        "max": 10
                    }
                }
            ]
        },
        "after": {
            "name": {
                "type": "String",
                "minlength": 3,
                "maxlength": 500
            },
            "questions": [
                {
                    "question": {
                        "type": "String",
                        "minlength": 3,
                        "maxlength": 200
                    },
                    "choices": [
                        {
                            "type": "String",
                            "minlength": 3,
                            "maxlength": 200
                        }
                    ],
                    "correct_answer": {
                        "type": "Number",
                        "min": 0,
                        "max": 10
                    }
                }
            ]
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
    "institution": {
        "Institution": {
            "type": "Schema.Types.ObjectId"
        },
        "name": {
            "type": "String",
            "minlength": 3,
            "maxlength": 200
        }
    },
    "instructors": [
        {
            "name": {
                "type": "String",
                "minlength": 3,
                "maxlength": 200
            },
            "Instructor": {
                "type": "Schema.Types.ObjectId"
            },
            "User": {
                "type": "Schema.Types.ObjectId"
            }
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
                "maxlength": 200
            },
            "image_active": {
                "type": "String",
                "minlength": 3,
                "maxlength": 200
            }
        }
    ],
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
                "maxlength": 200
            },
            "image_active": {
                "type": "String",
                "minlength": 3,
                "maxlength": 200
            }
        }
    ]
}