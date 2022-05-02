const express=require("express");
const router=express.Router();
const Todo=require("../models/user.model.js")
router.get("/",async(req,res)=>{
    try{
        const user=await Todo.find().lean().exec();
        return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
});

router.post("/register",async(req,res)=>{
    try{
        const user=await User.create(req.body);
        return res.status(201).send(user);
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
})
module.exports=router;