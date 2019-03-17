const express = require('express');
const router=express.Router();
const Fuzzy=require('../models/fuzzy');

//GET requests
router.get('/fuzzies',function(req,res,next){
    res.send({type:'GET'});

});

//POST requests
router.post('/fuzzies',function(req,res,next){
    Fuzzy.create(req.body).then(function(fuzzy){
        res.send(fuzzy);
    }).catch(next);

    // var fuzzy=new Fuzzy(req.body);
    // fuzzy.save();
   
})

//PUT requests
router.put('/fuzzies/:id',function(req,res,next){
    Fuzzy.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Fuzzy.findOne({_id:req.params.id}).then(function(fuzzy){
            res.send(fuzzy);
        
        })
        
    })
   
});

//DELETE requests
router.delete('/fuzzies/:id',function(req,res,next){
    //console.log(req.params.id);
    Fuzzy.findByIdAndRemove({_id: req.params.id}).then(function(fuzzy){
        res.send(fuzzy);
    });
    //res.send({type:'DELETE'});
})


module.exports=router;