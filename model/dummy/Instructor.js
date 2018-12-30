{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "name": {
        "type": "String",
        "minlength": 3,
        "maxlength": 50
    },
    "User": {
        "type": "Schema.Types.ObjectId"
    },
    "rating": {
        "total_rate": {
            "type": "Number",
            "min": 0,
            "max": 5
        },
        "number_of_rates": {
            "type": "Number",
            "min": 0
        }
    },
    "courses": [
        {
            "name": {
                "type": "String",
                "minlength": 3,
                "maxlength": 50
            },
            "date": {
                "type": "Date"
            },
            "Course": {
                "type": "Schema.Types.ObjectId"
            },
            "reward": {
                "type": "Number",
                "min": 0
            }
        }
    ],
    "workshops": [
        {
            "title": {
                "type": "String",
                "minlength": 3,
                "maxlength": 50
            },
            "start_date": {
                "type": "Date"
            },
            "Workshop": {
                "type": "Schema.Types.ObjectId"
            },
            "reward": {
                "type": "Number",
                "min": 0
            }
        }
    ]
}