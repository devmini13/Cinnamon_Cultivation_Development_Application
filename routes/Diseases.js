const express = require('express');
const router = express.Router();
const Diseases = require('../models/Diseases');

//save diseases details
router.post('/diseases/save',(req,res)=>{
  let newDiseases = new Diseases(req.body);

  newDiseases.save((err) =>{
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
module.exports = router;