const mongoose = require('module');

//Declaring a variable of the harvest scema.
const stateOwnerSchema = new mongeese.Schema({
    //Define properties/variables.
    name:{
        type:String,
        required:true
    },
    NIC:{
        type:String,
        required:true
    },
    TelephoneNo:{
        type:String,
        required:true
    },
    State:{
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
module.exports = mongeese.model('StateOwners',stateOwnerSchema);  