{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "Course": {
        "type": "Schema.Types.ObjectId"
    },
    "User": {
        "type": "Schema.Types.ObjectId"
    },
    "Instructors": [
        {
            "type": "Schema.Types.ObjectId"
        }
    ],
    "Supervisor": {
        "type": "Schema.Types.ObjectId"
    },
    "instructor_rate": {
        "type": "Number",
        "min": 0,
        "max": 5
    },
    "superVisor_rate": {
        "type": "Number",
        "min": 0,
        "max": 5
    },
    "total_rate": {
        "type": "Number",
        "min": 0,
        "max": 5
    },
    "rates": {
        "instructor": {
            "introduction": [
                {
                    "question": {
                        "type": "String",
                        "minlength": 3,
                        "maxlength": 200
                    },
                    "rate": {
                        "type": "Number",
                        "min": 0,
                        "max": 5,
                        "enum": [
                            1,
                            2,
                            3,
                            4,
                            5
                        ]
                    }
                }
            ],
            "body_language": [
                {
                    "question": {
                        "type": "String",
                        "minlength": 3,
                        "maxlength": 200
                    },
                    "rate": {
                        "type": "Number",
                        "min": 0,
                        "max": 5,
                        "enum": [
                            1,
                            2,
                            3,
                            4,
                            5
                        ]
                    }
                }
            ],
            "verbal_expression": [
                {
                    "question": {
                        "type": "String",
                        "minlength": 3,
                        "maxlength": 200
                    },
                    "rate": {
                        "type": "Number",
                        "min": 0,
                        "max": 5,
                        "enum": [
                            1,
                            2,
                            3,
                            4,
                            5
                        ]
                    }
                }
            ],
            "time_management": [
                {
                    "question": {
                        "type": "String",
                        "minlength": 3,
                        "maxlength": 200
                    },
                    "rate": {
                        "type": "Number",
                        "min": 0,
                        "max": 5,
                        "enum": [
                            1,
                            2,
                            3,
                            4,
                            5
                        ]
                    }
                }
            ],
            "training_tools": [
                {
                    "question": {
                        "type": "String",
                        "minlength": 3,
                        "maxlength": 200
                    },
                    "rate": {
                        "type": "Number",
                        "min": 0,
                        "max": 5,
                        "enum": [
                            1,
                            2,
                            3,
                            4,
                            5
                        ]
                    }
                }
            ]
        },
        "course_content": {
            "content": [
                {
                    "question": {
                        "type": "String",
                        "minlength": 3,
                        "maxlength": 200
                    },
                    "rate": {
                        "type": "Number",
                        "min": 0,
                        "max": 5,
                        "enum": [
                            1,
                            2,
                            3,
                            4,
                            5
                        ]
                    }
                }
            ],
            "technical_material": [
                {
                    "question": {
                        "type": "String",
                        "minlength": 3,
                        "maxlength": 200
                    },
                    "rate": {
                        "type": "Number",
                        "min": 0,
                        "max": 5,
                        "enum": [
                            1,
                            2,
                            3,
                            4,
                            5
                        ]
                    }
                }
            ]
        },
        "management": [
            {
                "question": {
                    "type": "String",
                    "minlength": 3,
                    "maxlength": 200
                },
                "rate": {
                    "type": "Number",
                    "min": 0,
                    "max": 5,
                    "enum": [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                }
            }
        ],
        "supervisor": [
            {
                "question": {
                    "type": "String",
                    "minlength": 3,
                    "maxlength": 200
                },
                "rate": {
                    "type": "Number",
                    "min": 0,
                    "max": 5,
                    "enum": [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                }
            }
        ]
    }
}