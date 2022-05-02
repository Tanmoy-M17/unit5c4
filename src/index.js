const { json } = require("express");
const express= require("express");
const  connect  = require("./configer/server.js");
const { register } = require("./controllers/auth.controllers.js");
const userConrtoller=require("./controllers/user.controllers.js")
const app=express();
app.use(express.json());

app.use("/user",userConrtoller);
app.post("/register",register)
app.listen(5000,async(req,res)=>{
    try{
        await connect();
        console.log("listening on port 5000");
    }
    catch(err){
        console.log("Err:",err)
    }
})