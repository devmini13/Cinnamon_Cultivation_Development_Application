const mongoose = require('mongoose');

//Declaring a variable of the harvest scema.
const stateOwnerSchema = new mongoose.Schema({
    //Define properties/variables.
    name:{
        type:String,
        required:true
    },
    nic:{
        type:String,
        required:true
    },
    telephoneNo:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
     
});

//Export this because we use this model in routes.
//'StateOwners' -> Database name and pass the schema
module.exports = mongoose.model('StateOwners',stateOwnerSchema);  