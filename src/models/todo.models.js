const mongoose=require("mongoose");
const User=require("./user.model.js")

const todoSchema= new mongoose.Schema({
  titel:{type:String,required:true},
  userId:{type:mongoose.Schema.Types.ObjectId,
    ref:User,
    required:true
 },
},
{
    versionKey:false,
    timestamps:true
})

const Todo=mongoose.model("todo",userSchema);
module.exports=Todo;