{
    "User": {
        "type": "Schema.Types.ObjectId"
    },
    "effect": {
        "positivly": {
            "percentage": {
                "type": "Number",
                "min": 0,
                "max": 100
            },
            "users": [
                {
                    "User": {
                        "type": "Schema.Types.ObjectId"
                    },
                    "name": {
                        "type": "String"
                    },
                    "job_title": {
                        "type": "String"
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
                }
            ]
        },
        "nutrality": {
            "percentage": {
                "type": "Number",
                "min": 0,
                "max": 100
            },
            "users": [
                {
                    "User": {
                        "type": "Schema.Types.ObjectId"
                    },
                    "name": {
                        "type": "String"
                    },
                    "job_title": {
                        "type": "String"
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
                }
            ]
        },
        "negativally": {
            "percentage": {
                "type": "Number",
                "min": 0,
                "max": 100
            },
            "users": [
                {
                    "User": {
                        "type": "Schema.Types.ObjectId"
                    },
                    "name": {
                        "type": "String"
                    },
                    "job_title": {
                        "type": "String"
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
                }
            ]
        }
    },
    "affected": {
        "positivly": {
            "percentage": {
                "type": "Number",
                "min": 0,
                "max": 100
            },
            "users": [
                {
                    "User": {
                        "type": "Schema.Types.ObjectId"
                    },
                    "name": {
                        "type": "String"
                    },
                    "job_title": {
                        "type": "String"
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
                }
            ]
        },
        "normally": {
            "percentage": {
                "type": "Number",
                "min": 0,
                "max": 100
            },
            "users": [
                {
                    "User": {
                        "type": "Schema.Types.ObjectId"
                    },
                    "name": {
                        "type": "String"
                    },
                    "job_title": {
                        "type": "String"
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
                }
            ]
        },
        "negativally": {
            "percentage": {
                "type": "Number",
                "min": 0,
                "max": 100
            },
            "users": [
                {
                    "User": {
                        "type": "Schema.Types.ObjectId"
                    },
                    "name": {
                        "type": "String"
                    },
                    "job_title": {
                        "type": "String"
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
                }
            ]
        }
    },
    "_id": {
        "type": "Schema.Types.ObjectId"
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
    }
}