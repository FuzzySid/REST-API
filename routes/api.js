const express = require('express');
const router=express.Router();

//GET requests
router.get('/fuzzies',function(req,res){
    res.send({type:'GET'});

});

//POST requests
router.post('/fuzzies',function(req,res){
    console.log(req.body);
    res.send({
        type:'POST',
        name:req.body.name,
        rank:req.body.rank
    });
})

//PUT requests
router.put('/fuzzies/:id',function(req,res){
    res.send({type:'PUT'});
});

//DELETE requests
router.delete('/fuzzies/:id',function(req,res){
    res.send({type:'DELETE'});
})


module.exports=router;