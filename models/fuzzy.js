const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//Create fuzzy Schema and model
const FuzzySchema=new Schema({
    name:{
        type:String,
        required:[true,'Name field required']
    },

    rank:{
        type:String,
    },

    available:{
        type:Boolean,
        default: false
    }
    //add geo location
});

const Fuzzy=mongoose.model('fuzzy',FuzzySchema);

module.exports=Fuzzy;