{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "level": {
        "type": "Number",
        "min": 0
    },
    "Parent": {
        "type": "Schema.Types.ObjectId"
    },
    "employees": [
        {
            "User": {
                "type": "Schema.Types.ObjectId"
            },
            "rank": {
                "type": "Number",
                "min": 0,
                "max": 2
            }
        }
    ]
}