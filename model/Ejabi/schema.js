const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Types.objectId;
const {ejabiEnums} = require('../../shared/enums');

const EjabiSchema = new Schema({
})

let PositivityExamSchema = new Schema({
    title: String,
    questions: [
        {
            question: String,
            answers: [
                {
                    answer: String,
                    value: Number,
                },
            ],
        },
    ],
    users: {
        type: [
            {
                User: {
                    type: objectId,
                    ref: 'User',
                },
                name: String,
                position: String,
                final_degree: Number,
                level: Number,
            },
        ],
        default: [],
    }
    
    
    
})


let PositivityMessagesSchema = new Schema({
    Sender: {
        type: objectId,
        ref: 'User',
    },
    Receiver: {
        type: objectId,
        ref: 'User',
    },
    message: String,
    type: {
        type: String,
        // enum: ['thank you',' congrates', 'positive message', 'good job', 'do you need help?'],
        enum: Object.values(ejabiEnums.PositivityMessages),
    },
    entity:{
        Entity: {
            type: objectId,
            ref: 'Organization', // created by Soliman
        },
        name: String,
        level: Number,
    },

})


let NeedBotEvaluationRequestsSchema = new Schema({
    user: {
        User: {
            type: objectId,
            ref: 'User',
        },
        name: String,
    },
    tag: String,
    created_at: {
        type: Date,
        default: Date.now(),
    },
    entity:{
        Entity: {
            type: objectId,
            ref: 'Organization', // created by Soliman
        },
        name: String,
        level: Number,
    },
    status: String,
})


let pollsSchema = new Schema({
    question: String,
    question_type: String,
    tag: tag,
    language: String,
    color: String,
    created_at: {
        type: Date,
        default: Date.now(),
    },
})

let polls_dbSchema = new Schema({

    tag: tag,
    poll: {
        Poll: {
            type: objectId,
            ref: 'polls',
        },
        question: String,
    },
    asked_user: {
        AskedUser: {
            type: objectId,
            ref: 'User',
        },
        name: String,
        position: String,
    },
    selected_user: {
        SelectedUser: {
            type: objectId,
            ref: 'User',
        },
        name: String,
        position: String,
    },
    permission: String,
    created_at: {
        type: Date,
        default: Date.now(),
    },
})



module.exports.EjabiSchema = EjabiSchema;
module.exports.pollsSchema = pollsSchema;
module.exports.polls_dbSchema = polls_dbSchema;
module.exports.PositivityMessagesSchema = PositivityMessagesSchema;
module.exports.PositivityExamSchema = PositivityExamSchema;
module.exports.NeedBotEvaluationRequestsSchema = NeedBotEvaluationRequestsSchema;