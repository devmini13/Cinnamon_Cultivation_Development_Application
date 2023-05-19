const express = require('express');
const router = express.Router();
const StateOwner = require('../models/StateOwner');

//save stateOwner details
router.post('/stateOwner/save',(req,res)=>{
  let newStateOwner = new StateOwner(req.body);

  newStateOwner.save((err) =>{
    if(err){
      return res.status(400).json({
        error:err
      });
    }
    return res.status(200).json({
      success:"Saves Successfully"
    });
});

});

//get stateOwner details
router.get('/stateOwners',(req,res) => {
    StateOwner.find().exec((err,StateOwner) =>{
      if(err){
        return res.status(400).json({
          error:err
        });
      }
      return res.status(200).json({
        success:true,
        existingPosts:StateOwner
      });
    });
});

//update stateOwner details
router.put('/stateOwner/update/:id',(req,res)=>{
  StateOwner.findByIdAndUpdate(
    req.params.id,
    {
      $set:req.body
    },
    (err,StateOwner)=>{
      if(err){
        return res.status(400).json({error:err});
      }

      return res.status(200).json({
        success:"Updated Successfully."
      });
    }
  );
});

//delete stateOwner details
router.delete('/stateOwner/delete/:id',(req,res) => {
  StateOwner.findByIdAndDelete(req.params.id).exec((err,deletedStateOwner)=>{
    if(err) return res.status(400).json({
      message:"Delete unsuccesfull",err
    });

    return res.json({
      message:"Delete Successfull",deletedStateOwner
    });
  });
});
    
module.exports = router;