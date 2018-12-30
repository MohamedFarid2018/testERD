{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "title": {
        "type": "String"
    },
    "author": {
        "type": "String"
    },
    "image": {
        "type": "String"
    },
    "published_date": {
        "type": "Date"
    },
    "current_content": {
        "type": "String"
    },
    "original_content": {
        "type": "String"
    },
    "description": {
        "type": "String"
    },
    "tag": {
        "type": "String"
    },
    "article_type": {
        "type": "String",
        "enum": [
            "created",
            "uploaded"
        ]
    },
    "has_file": {
        "type": "Boolean",
        "default": false
    },
    "file_data": {
        "name": {
            "type": "String"
        },
        "type": {
            "type": "String",
            "enum": [
                "pdf",
                "doc"
            ]
        }
    },
    "publishing_data": {
        "by": {
            "User": {
                "type": "Schema.Types.ObjectId"
            },
            "name": {
                "type": "String"
            }
        },
        "status": [
            {
                "status": {
                    "type": "String",
                    "default": "unseen",
                    "enum": [
                        "approved",
                        "rejected",
                        "under review",
                        "unseen"
                    ]
                },
                "date": {
                    "type": "Date"
                }
            }
        ],
        "active_state": {
            "type": "String",
            "enum": [
                "approved",
                "rejected",
                "under review",
                "unseen"
            ]
        },
        "note": {
            "type": "String"
        }
    },
    "modification_data": [
        {
            "by": {
                "User": {
                    "type": "Schema.Types.ObjectId"
                },
                "name": {
                    "type": "String"
                }
            },
            "content": {
                "type": "String"
            },
            "date": {
                "type": "Date"
            },
            "status": [
                {
                    "status": {
                        "type": "String",
                        "default": "unseen",
                        "enum": [
                            "approved",
                            "rejected",
                            "under review",
                            "unseen"
                        ]
                    },
                    "date": {
                        "type": "Date"
                    }
                }
            ],
            "note": {
                "type": "String"
            },
            "active_state": {
                "type": "String",
                "default": "unseen",
                "enum": [
                    "approved",
                    "rejected",
                    "under review",
                    "unseen"
                ]
            }
        }
    ],
    "comments": [
        {
            "User": {
                "type": "Schema.Types.ObjectId"
            },
            "date": {
                "type": "Date"
            },
            "content": {
                "type": "String"
            }
        }
    ],
    "shares": [
        {
            "By": {
                "type": "Schema.Types.ObjectId"
            },
            "To": {
                "type": "Schema.Types.ObjectId"
            },
            "date": {
                "type": "Date"
            },
            "notes": {
                "type": "String"
            }
        }
    ],
    "action": {
        "type": {
            "type": "String",
            "enum": [
                "like",
                "dis-like",
                "favorite",
                "pinned",
                "read",
                "reading"
            ]
        },
        "date": {
            "type": "Date"
        },
        "User": {
            "type": "Schema.Types.ObjectId"
        }
    }
}