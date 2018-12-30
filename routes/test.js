const router = require('express').Router();
const positivityExam = require('../model/Ejabi/schema').PositivityExamSchema;


router.get('/',function(req, res){
   
})

router.post('/createPE',function(req, res){
    positivityExam.insert(req.body);

})

module.exports = router;