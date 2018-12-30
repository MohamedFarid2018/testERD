const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;
const {ejabiEnums} = require('../../shared/enums');

const EjabiSchema = new Schema({
})

const usersPositivitySchema = new Schema({
    User: {
        type: ObjectId,
        ref: 'User',
    },
    name: String,
    position: String,
    final_degree: Number,
    level: String,
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
        type: [usersPositivitySchema],
        default: [],
    }
    
    
    
})


let PositivityMessagesSchema = new Schema({
    Sender: {
        type: ObjectId,
        ref: 'User',
    },
    Receiver: {
        type: ObjectId,
        ref: 'User',
    },
    message: String,
    type: {
        type: String,
        enum: ['thank you',' congrates', 'positive message', 'good job', 'do you need help?'],
        enum: Object.values(ejabiEnums.PositivityMessages),
    },
    entity:{
        Entity: {
            type: ObjectId,
            ref: 'Organization', // created by Soliman
        },
        name: String,
        level: Number,
    },

})


let NeedBotEvaluationRequestsSchema = new Schema({
    user: {
        User: {
            type: ObjectId,
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
            type: ObjectId,
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
    tag: String,
    language: String,
    color: String,
    created_at: {
        type: Date,
        default: Date.now(),
    },
})

let polls_dbSchema = new Schema({

    tag: String,
    poll: {
        Poll: {
            type: ObjectId,
            ref: 'polls',
        },
        question: String,
    },
    asked_user: {
        AskedUser: {
            type: ObjectId,
            ref: 'User',
        },
        name: String,
        position: String,
    },
    selected_user: {
        SelectedUser: {
            type: ObjectId,
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