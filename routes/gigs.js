const router = require("express").Router();

const gigsModel= require("../models/gigs")



router.post('/api/gig', (req,res)=>{
try{
    const newGig= new gigsModel({
name:req.body.name,
date:req.body.date,
budget:req.body.budget,
status:req.body.status,
required:req.body.required,
hired:req.body.hired,
applicants:req.body.applicants

    })
    const saveGig= newGig.save()
    res.status(200).json("Gig Added Successfully!")

}catch(err){
    res.json(err);
}



})

router.get('/api/gigs',async(req,res)=>{
try{

    const allGigs= await gigsModel.find({});
    res.status(200).json(allGigs);

}catch(err){
    res.json(err);
}


}


)


module.exports=router;