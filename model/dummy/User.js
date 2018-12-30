{
    "_id": {
        "type": "Schema.Types.ObjectId"
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
    "offline_courses": [
        {
            "name": {
                "type": "String",
                "minlength": 3,
                "maxlength": 50
            },
            "Course": {
                "type": "Schema.Types.ObjectId"
            },
            "date": {
                "type": "Date"
            },
            "exam": {
                "after": {
                    "title": {
                        "type": "String",
                        "minlength": 3,
                        "maxlength": 50
                    },
                    "Exam": {
                        "type": "Schema.Types.ObjectId"
                    },
                    "questions": [
                        {
                            "Question": {
                                "type": "Schema.Types.ObjectId"
                            },
                            "is_correct": {
                                "type": "Boolean"
                            },
                            "student_answer": {
                                "type": "String"
                            }
                        }
                    ],
                    "final_score": {
                        "type": "Number"
                    }
                },
                "before": {
                    "title": {
                        "type": "String",
                        "minlength": 3,
                        "maxlength": 50
                    },
                    "Exam": {
                        "type": "Schema.Types.ObjectId"
                    },
                    "questions": [
                        {
                            "Question": {
                                "type": "Schema.Types.ObjectId"
                            },
                            "is_correct": {
                                "type": "Boolean"
                            },
                            "student_answer": {
                                "type": "String"
                            }
                        }
                    ],
                    "final_score": {
                        "type": "Number"
                    }
                }
            },
            "attendance": {
                "attendance_rate": {
                    "type": "Number",
                    "min": 0,
                    "max": 100
                },
                "delay_rate": {
                    "type": "Number",
                    "min": 0,
                    "max": 100
                },
                "number_of_rates": {
                    "type": "Number",
                    "min": 0
                },
                "Attendance": {
                    "type": "Schema.Types.ObjectId"
                }
            }
        }
    ],
    "workshops": [
        {
            "name": {
                "type": "String",
                "minlength": 3,
                "maxlength": 50
            },
            "Workshop": {
                "type": "Schema.Types.ObjectId"
            },
            "date": {
                "type": "Date"
            },
            "attendance": {
                "attendance_rate": {
                    "type": "Number",
                    "min": 0,
                    "max": 100
                },
                "number_of_rates": {
                    "type": "Number",
                    "min": 0
                },
                "Attendance": {
                    "type": "Schema.Types.ObjectId"
                }
            }
        }
    ],
    "agenda": [
        {
            "date": {
                "type": "Date"
            },
            "name": {
                "type": "String",
                "minlength": 3,
                "maxlength": 200
            },
            "location": {
                "type": "String",
                "minlength": 3,
                "maxlength": 50
            },
            "Ref": {
                "type": "String"
            },
            "type": {
                "type": "String",
                "default": "workshop",
                "enum": [
                    "workshop",
                    "course"
                ]
            },
            "photo": {
                "type": "String",
                "minlength": 3,
                "maxlength": 500
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
            "image_active": {
                "type": "String",
                "minlength": 3,
                "maxlength": 500
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
            "image_active": {
                "type": "String",
                "minlength": 3,
                "maxlength": 500
            }
        }
    ],
    "online_courses": [
        {
            "course_Id": {
                "type": "Schema.Types.ObjectId"
            },
            "course_name": {
                "type": "String",
                "minlength": 3,
                "maxlength": 200
            },
            "progress": {
                "type": "Number",
                "min": 0,
                "max": 100
            },
            "lesson": [
                {
                    "lesson_Id": {
                        "type": "Schema.Types.ObjectId"
                    },
                    "progress": {
                        "type": "Number",
                        "min": 0,
                        "max": 100
                    }
                }
            ],
            "created_at": {
                "type": "Date"
            },
            "exams": {
                "before": {
                    "title": {
                        "type": "String",
                        "minlength": 3,
                        "maxlength": 50
                    },
                    "Exam": {
                        "type": "Schema.Types.ObjectId"
                    },
                    "questions": [
                        {
                            "Question": {
                                "type": "Schema.Types.ObjectId"
                            },
                            "is_correct": {
                                "type": "Boolean"
                            },
                            "student_answer": {
                                "type": "String"
                            }
                        }
                    ],
                    "final_score": {
                        "type": "Number"
                    }
                },
                "after": {
                    "title": {
                        "type": "String",
                        "minlength": 3,
                        "maxlength": 50
                    },
                    "Exam": {
                        "type": "Schema.Types.ObjectId"
                    },
                    "questions": [
                        {
                            "Question": {
                                "type": "Schema.Types.ObjectId"
                            },
                            "is_correct": {
                                "type": "Boolean"
                            },
                            "student_answer": {
                                "type": "String"
                            }
                        }
                    ],
                    "final_score": {
                        "type": "Number"
                    }
                },
                "quizes": [
                    {
                        "title": {
                            "type": "String",
                            "minlength": 3,
                            "maxlength": 50
                        },
                        "Exam": {
                            "type": "Schema.Types.ObjectId"
                        },
                        "questions": [
                            {
                                "Question": {
                                    "type": "Schema.Types.ObjectId"
                                },
                                "is_correct": {
                                    "type": "Boolean"
                                },
                                "student_answer": {
                                    "type": "String"
                                }
                            }
                        ],
                        "final_score": {
                            "type": "Number"
                        }
                    }
                ]
            }
        }
    ],
    "articles": [
        {
            "Article": {
                "type": "Schema.Types.ObjectId"
            },
            "behaviour": {
                "read": {
                    "type": "Number",
                    "default": 0
                },
                "reading": {
                    "status": {
                        "type": "Number",
                        "default": 0
                    },
                    "position": {
                        "type": "String"
                    }
                },
                "liked": {
                    "type": "Number",
                    "default": 0
                },
                "disliked": {
                    "type": "Number",
                    "default": 0
                },
                "favourite": {
                    "type": "Number",
                    "default": 0
                },
                "pinned": {
                    "type": "Number",
                    "default": 0
                },
                "published": {
                    "type": "Number",
                    "default": 0
                },
                "modified": {
                    "type": "Number",
                    "default": 0
                },
                "comment": {
                    "type": "Number",
                    "default": 0
                },
                "shared": [
                    {
                        "User": {
                            "type": "Schema.Types.ObjectId"
                        },
                        "status": {
                            "type": "Number",
                            "default": 0
                        }
                    }
                ],
                "shared_with": [
                    {
                        "User": {
                            "type": "Schema.Types.ObjectId"
                        },
                        "status": {
                            "type": "Number",
                            "default": 0
                        },
                        "note": {
                            "type": "String"
                        }
                    }
                ]
            }
        }
    ],
    "job_degree": {
        "type": "String"
    },
    "job_category": {
        "type": "String"
    },
    "scientific certificate": {
        "type": "String"
    },
    "positivity-exam-result": {
        "type": "Number",
        "min": 0,
        "max": 100
    },
    "positivity-exam-level": {
        "type": "String"
    },
    "positivity-messages": {
        "type": "Number",
        "min": 0
    },
    "thankyou-messages": {
        "type": "Number",
        "min": 0
    },
    "congratulations-messages": {
        "type": "Number",
        "min": 0
    },
    "articles_stats": {
        "reads": {
            "type": "Number",
            "default": 0
        },
        "shared_with": {
            "type": "Number",
            "default": 0
        },
        "shares": {
            "type": "Number",
            "default": 0
        },
        "comments": {
            "type": "Number",
            "default": 0
        },
        "modifies": {
            "type": "Number",
            "default": 0
        },
        "publishes": {
            "type": "Number",
            "default": 0
        },
        "favorites": {
            "type": "Number",
            "default": 0
        },
        "dislikes": {
            "type": "Number",
            "default": 0
        },
        "likes": {
            "type": "Number",
            "default": 0
        },
        "edits": {
            "type": "Number"
        },
        "accepted_publishes": {
            "type": "Number",
            "default": 0
        },
        "declined_publishes": {
            "type": "Number",
            "default": 0
        }
    }
}