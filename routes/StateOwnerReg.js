const express = require('express');

//Export user model
const StateOwner = require('../models/StateOwner');

//Invoking express router function
const router = express.Router();
 
//Define the HTTP Request for four CRUD funtionality (CREATE,UPDATE,DELETE,RETRIWE) in here.

//Write, For save State Owner details by using POST HTTP request methods.
//Create path.
router.post('/owner/save',(req,res) =>{
    
    //request the content
    let newPost = new StateOwner(request.body);

    //save the content
    newOwner.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            //Returen response in json format by using Key And Value.
            success:"State Owner's Details Saved Successfully !"

        });
    });
});

//

 
module.exports = router;