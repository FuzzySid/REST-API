const express=require('express');
const routes=require('./routes/api');
const bodyParser=require('body-parser');

//Setting up app
const app=express();

app.use(bodyParser.json());

//initialize routes
app.use('/api',routes);


//Listen for request
app.listen(process.env.port || 4000,function(){
    console.log('Listening for requests on port 4000..');
});

 
