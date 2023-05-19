const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({

    C_req_ID:{
        type :String,
        required:true
    },
    C_name:{
        type :String,
        required :true
    },
    C_location:{
        type :String,
        required :true
    },
    requirement:{
        type :String,
        required :true
    },
    Cinnamon_grade:{
        type :String
    },
    Date:{
        type :Date,
        required :true
    }
})


module.exports = mongoose.model('company_requirement',companySchema)