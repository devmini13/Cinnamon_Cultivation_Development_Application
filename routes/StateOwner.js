const express = require('express');
const router = express.Router();
const StateOwner = require('../models/StateOwner');

//Save stateOwner details
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

//Get stateOwner details
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

//Update stateOwner details
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





module.exports = router;
