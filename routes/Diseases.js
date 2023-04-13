const express = require('express');
const Diseases = require('../models/Diseases');


const router = express.Router();

//save diseases details
router.diseases('/diseases/save',(req,res)=>{
  let newDisease = new Diseases(req,body);

  newDisease.save((err) => {
    if(err){
      return res.status(400).json({
        error:err
      });
    }
    return res.status(200).json({
      success:"Disease details saved successfully"
    });
  });
});

module.exports = router;
