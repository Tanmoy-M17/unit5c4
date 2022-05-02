const User=require("../models/user.model.js");
var jwt =require("json-web-token");
const user = require("../models/user.model.js");
require('dotenv').config();
const generateToken=(user)=>{
    return jwt.sign({user},process.env.secretkey);
}
const register=async(req,res)=>{
    try{
        let user =await user.findone({email:req.body.email});
        if(user){
            return res.status(500).send("Email is alredy Taken")
        }

        user= await User.create(req,body);
        const token=generateToken(user);
        return res.status(201).send({user,token})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
}

const login=async(req,res)=>{
    try{
let user=await User.findOne({email:req.body.email})
if(!user){
    return res.status(500).send("Email or password is wrong")
}
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
}
module.exports=({register,login})