const router = require('express').Router();
const positivityExam = require('../model/Ejabi/schema').PositivityExam;
const positivityMessages = require('../model/Ejabi/schema').PositivityMessage;
const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


router.get('/',function(req, res){
   
})

let PM;

router.post('/createPE',function(req, res){
    console.log(typeof(positivityExam));
    const PE = new positivityExam({
        title: req.body.title,
        questions:req.body.questions,
        users: req.body.users
    }) 
    PE.save( (err,saved) =>{
        if(err){
            res.send({success: "failed"});
        }
        else{
            res.send({success: "saved"});
        }
    })

    // test getting specific user in over 1300 user
    // positivityExam.findOne({"title": req.body.title}, "users",(err,users)=>{
    //     const highest = users.users.filter(user => user.final_degree > 70)
    //     res.send({high: highest});
    // });

    // test getting specific exam questions
    // positivityExam.findOne({"title": req.body.title}, "questions",(err,questions)=>{
    //     res.send({questions: questions})
    // });

})

router.post('/createPM',function(req, res){
    console.log(typeof(positivityExam));
    // for(let i=0; i < 1000; i++){
    //     PM = new positivityMessages({
    //         Sender: req.body.Sender,
    //         Receiver: req.body.Receiver,
    //         message: req.body.message,
    //         type: "thank you",
    //         entity: req.body.entity,
    //     }) 
    //     PM.save( (err,saved) =>{
    //         if(err){
    //             console.log(err);
    //             res.send({success: "failed"});
    //         }
    //     })
    //     PM = new positivityMessages({
    //         Sender: req.body.Sender,
    //         Receiver: req.body.Receiver,
    //         message: req.body.message,
    //         type: "congrates",
    //         entity: req.body.entity,
    //     }) 
    //     PM.save( (err,saved) =>{
    //         if(err){
    //             console.log(err);
    //             res.send({success: "failed"});
    //         }
    //     })
    //     PM = new positivityMessages({
    //         Sender: req.body.Sender,
    //         Receiver: req.body.Receiver,
    //         message: req.body.message,
    //         type: 'positive message',
    //         entity: req.body.entity,
    //     }) 
    //     PM.save( (err,saved) =>{
    //         if(err){
    //             console.log(err);
    //             res.send({success: "failed"});
    //         }
    //     })
    //     PM = new positivityMessages({
    //         Sender: req.body.Sender,
    //         Receiver: req.body.Receiver,
    //         message: req.body.message,
    //         type: 'good job',
    //         entity: req.body.entity,
    //     }) 
    //     PM.save( (err,saved) =>{
    //         if(err){
    //             console.log(err);
    //             res.send({success: "failed"});
    //         }

    //     })
    //     PM = new positivityMessages({
    //         Sender: req.body.Sender,
    //         Receiver: req.body.Receiver,
    //         message: req.body.message,
    //         type: 'do you need help?',
    //         entity: req.body.entity,
    //     }) 
    //     PM.save( (err,saved) =>{
    //         if(err){
    //             console.log(err);
    //             res.send({success: "failed"});
    //         }
    //     })
    // }
    // res.send({success: "saved"});

    // Testing the aggregation to get the number of every message type specific user in over 1300 user
    const Count = positivityMessages.aggregate([  
        {
            $match: {
                "Sender": ObjectId(req.body.Sender)
            }
        },
        {
            "$unwind":"$type"
        },
        {
            "$sortByCount": "$type"
        },
    ]);
    res.send({Count: Count});



})

module.exports = router;