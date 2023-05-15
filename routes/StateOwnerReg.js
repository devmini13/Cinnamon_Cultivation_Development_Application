const express = require('express');

//Export user model
const StateOwner = require('../models/StateOwner');

//Invoking express router function
const router = express.Router();
 
//Define the HTTP Request for four CRUD funtionality (CREATE,UPDATE,DELETE,RETRIWE) in here.

//Write, For save State Owner details by using POST HTTP request method.
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
//write, For get owner details - GET HTTP request method.
router.get('/ownerDetails',(req,res) =>{
    OwnerDetails.finds().exec((err,ownerDetails) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingOwnerDetails:ownerDetails
        });
    });
});

//write, For update owner details - PUT HTTP request method.
router.put('/ownerDetails/update/:id',(req,res) =>{
    OwnerDetails.findByIdAndUpdate(
        //select id which want to be update &
        //selected post id
        req.params.id,
        {
            $set:req.body
        },
        (err,ownerDetails) =>{

            if(err){
                return res.status(400).json({error:err});
            }
        return res.status(200).json({
            success:"Update Succesfuly"
        });
        }
    );
});
//write, For delete owner details - DELETE HTTP request method.
router,delete('/ownerDetails/delete/:id', (req,res) => {
    OwnerDetails.findByRemove(res.param.id).exec((err,deleteownerDetails) => {
        if(err) return req.status(400),json({
            message:"Delete Unsuccesfull",err
        });
        return res.json({
            message:"Delete Successfull",deleteownerDetails
        });
    });
});

 
module.exports = router;