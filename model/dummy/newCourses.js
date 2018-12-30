{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "name": {
        "type": "String",
        "minlength": 3,
        "maxlength": 200
    },
    "type": {
        "type": "String",
        "default": "inside",
        "enum": [
            "outside",
            "inside"
        ]
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
                "maxlength": 50
            },
            "Instructor": {
                "type": "Schema.Types.ObjectId"
            },
            "User": {
                "type": "Schema.Types.ObjectId"
            }
        }
    ],
    "start_date": {
        "type": "Date"
    },
    "objectives": [
        {
            "type": "String",
            "minlength": 3,
            "maxlength": 500
        }
    ],
    "price": {
        "type": "Number",
        "min": 0
    },
    "transport": {
        "type": "Number",
        "min": 0
    },
    "hotel_reservation": {
        "type": "Number",
        "min": 0
    },
    "tickets": {
        "type": "Number",
        "min": 0
    },
    "pocket_money": {
        "type": "Number",
        "min": 0
    },
    "status": {
        "type": "String",
        "default": "pending",
        "enum": [
            "approved",
            "pending"
        ]
    }
}