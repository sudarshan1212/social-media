const mongoose = require('mongoose');
const postSchema= mongoose.Schema({
    content:{type:String,trim:true},
    postedBY:{type:mongoose.Schema.Types.ObjectId,ref:"Register"}
})
module.exports=mongoose.model("Post",postSchema)