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


const Ejabi = mongoose.model('Ejabi',EjabiSchema);
const polls = mongoose.model('polls',pollsSchema);
const polls_db = mongoose.model('polls_db', polls_dbSchema);
const PositivityMessage = mongoose.model('PositivityMessages',PositivityMessagesSchema);
const PositivityExam = mongoose.model('PositivityExam',PositivityExamSchema);
const NeedBotEvaluationRequests = mongoose.model('NeedBotEvaluationRequests', NeedBotEvaluationRequestsSchema); 

module.exports.Ejabi = Ejabi;
module.exports.polls = polls;
module.exports.polls_db = polls_db;
module.exports.PositivityMessage = PositivityMessage;
module.exports.PositivityExam = PositivityExam;
module.exports.NeedBotEvaluationRequests = NeedBotEvaluationRequests;