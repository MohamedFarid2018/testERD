{
    "delegator_user": {
        "Sooty": {
            "type": "Schema.Types.ObjectId"
        },
        "user_id": {
            "type": "String",
            "required": true
        }
    },
    "delegated_user": {
        "Sooty": {
            "type": "Schema.Types.ObjectId"
        },
        "user_id": {
            "type": "String",
            "required": true
        }
    },
    "delegated_user_manager": {
        "Sooty": {
            "type": "Schema.Types.ObjectId"
        },
        "user_id": {
            "type": "String"
        }
    },
    "delegated_user_response_time": {
        "type": "Date"
    },
    "delegated_user_manager_response_time": {
        "type": "Date"
    },
    "delegationS_satus": {
        "type": "String",
        "default": "firstTime",
        "enum": [
            "firstTime",
            "accepted",
            "rejected",
            "inActive"
        ]
    },
    "delegation_approval_by_delegated_user_manager": {
        "type": "String",
        "default": "firstTime",
        "enum": [
            "firstTime",
            "accepted",
            "rejected"
        ]
    },
    "created_at": {
        "type": "Date"
    },
    "updated_at": {
        "type": "Date"
    },
    "_id": {
        "type": "String"
    }
}