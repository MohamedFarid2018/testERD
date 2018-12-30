{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "total_score": {
        "type": "Number",
        "min": 0
    },
    "user": {
        "name": {
            "type": "String",
            "minlength": 3,
            "maxlength": 50
        },
        "User": {
            "type": "Schema.Types.ObjectId"
        }
    }
}