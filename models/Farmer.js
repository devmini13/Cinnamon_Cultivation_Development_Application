const mongoose = require('mongoose');

//declaring a variable
const harvestSchema = new mongeese.Schema({
    //define properties
    topic:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    harvestpostCategory:{
        type:String,
        required:true
    }
});
module.exports = mongeese.model('HarvestPosts',harvestSchema);