const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//creating geolocation schema
const GeoSchema=new Schema({
    type:{
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

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
    },
    geometry: GeoSchema
    
    //add geo location
    // "geometry": {
    //     "type": "Point",
    //     "coordinates": [125.6, 10.1]
    //   },
});


const Fuzzy=mongoose.model('fuzzy',FuzzySchema);

module.exports=Fuzzy;