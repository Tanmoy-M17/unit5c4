const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    firstName:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,requirerd:true}
},
{
    versionKey:false,
    timestamps:true
})

const user=mongoose.model("user",userSchema);
module.exports=user;