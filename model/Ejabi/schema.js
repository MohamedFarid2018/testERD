const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Types.objectId;
const {ejabiEnums} = require('../../shared/enums');

const EjabiSchema = new Schema({
})

let PositivityQuestionsSchema = new Schema({
    question: String,
    answers: [
        {
            answer: String,
            value:Number,
        }
    ]
})

let PositivityTestSchema = new Schema({
    User: {
        type: objectId,
        ref: 'User',
    },
    percentage: Number,
    level: String,
    questions: [
        {
            PositivityQuestion:{
                type: objectId,
                ref: 'PositivityTest',
            },
            question: String,
            answer: String,
            value: Number,
        }
    ]
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
module.exports.PositivityQuestionsSchema = PositivityQuestionsSchema;
module.exports.PositivityTestSchema = PositivityTestSchema;
module.exports.NeedBotEvaluationRequestsSchema = NeedBotEvaluationRequestsSchema;