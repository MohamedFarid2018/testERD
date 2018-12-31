const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const NeedSchema = new Schema({
})

const job_grouping = new Schema({
    name: String,
    job_titles: [
        {
            name: String,
            JobTitle: {
                type: ObjectId,
                ref: "jobTitle",
            },
        },
    ],
    job_title_degree: Number,
    entity: {
        Entity: {
            type: ObjectId,
            ref: 'Organization', // created by Soliman
        },
        name: String,
        level: Number,
    },
    target_level: String,
})


module.exports.NeedSchema = NeedSchema;