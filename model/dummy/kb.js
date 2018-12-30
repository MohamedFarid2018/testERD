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
        "file_name": {
            "type": "String"
        },
        "file_type": {
            "type": "String",
            "enum": [
                "pdf",
                "doc"
            ]
        }
    },
    "publishing_data": {
        "Published_by": {
            "type": "Schema.Types.ObjectId"
        },
        "publishing_status": [
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
        "publishing_active_state": {
            "type": "String",
            "enum": [
                "approved",
                "rejected",
                "under review",
                "unseen"
            ]
        },
        "publishing_note": {
            "type": "String"
        }
    },
    "modification_data": [
        {
            "Modification_by": {
                "type": "Schema.Types.ObjectId"
            },
            "modification_content": {
                "type": "String"
            },
            "modification_date": {
                "type": "Date"
            },
            "modification_status": [
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
            "modification_note": {
                "type": "String"
            },
            "modification_active_state": {
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
    "liked": [
        {
            "User": {
                "type": "Schema.Types.ObjectId"
            },
            "liked_date": {
                "type": "Date"
            }
        }
    ],
    "disliked": [
        {
            "User": {
                "type": "Schema.Types.ObjectId"
            },
            "disliked_date": {
                "type": "Date"
            }
        }
    ],
    "favourites": [
        {
            "User": {
                "type": "Schema.Types.ObjectId"
            },
            "favourite_date": {
                "type": "Date"
            }
        }
    ],
    "pinned": [
        {
            "User": {
                "type": "Schema.Types.ObjectId"
            },
            "pinned_date": {
                "type": "Date"
            }
        }
    ],
    "read": [
        {
            "User": {
                "type": "Schema.Types.ObjectId"
            },
            "read_date": {
                "type": "Date"
            }
        }
    ],
    "reading": [
        {
            "User": {
                "type": "Schema.Types.ObjectId"
            },
            "reading_date": {
                "type": "Date"
            }
        }
    ],
    "comments": [
        {
            "User": {
                "type": "Schema.Types.ObjectId"
            },
            "comment_date": {
                "type": "Date"
            },
            "comment_content": {
                "type": "String"
            }
        }
    ],
    "share": [
        {
            "Shared_by": {
                "type": "Schema.Types.ObjectId"
            },
            "Shared_to": {
                "type": "Schema.Types.ObjectId"
            },
            "share_date": {
                "type": "Date"
            }
        }
    ]
}