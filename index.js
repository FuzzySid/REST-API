const express=require('express');
const routes=require('./routes/api');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');


//Connecting to mongodb
mongoose.connect('mongodb://localhost/fuzzydb');
mongoose.Promise=global.Promise;

//Setting up app
const app=express();

app.use(express.static('public'));

app.use(bodyParser.json());

//initialize routes
app.use('/api',routes);

//error handling
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error:err.message});
})

//Listen for request
app.listen(process.env.port || 4000,function(){
    console.log('Listening for requests on port 4000..');
});

 
