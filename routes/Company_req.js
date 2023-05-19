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

//Get company requirements

router.get('/company/view', (req, res)=>{
    Company_req.find().exec((err,company_reqs)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCompany_req:company_reqs
        });
    });
});


//Update company requirements
router.patch('/company/update/:id',(req,res)=>{
    Company_req.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,Company_req)=>{
            if(err){
                return res.status(400).json({error:err})
            }
            return res.status(200).json({
                success:"Updated company requirement successfully" 
            });
        }
    );
})

//Delete company requirement
router.delete('/company/delete/:id',(req,res)=>{
    Company_req.findByIdAndRemove(req.params.id).exec((err,deleteCompany_req)=>{
        
        if(err) return res.status(400).json({
            message:"deleted unsuccessful",err
        });

        return res.json({
            message:"deleted successful",deleteCompany_req
        });

    });
}); 

