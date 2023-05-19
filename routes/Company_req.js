const express = require("express");
const Company_req = require("../models/Company_req");

const router = express.Router();

//save company requirement 

router.post('/company/save', (req, res)=>{

    let newCompany_req = new Company_req(req.body);

    newCompany_req.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Company requirement is saved."
        });
    });
});

