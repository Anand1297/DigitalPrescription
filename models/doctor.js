const mongoose= require('mongoose');

const doctor = new mongoose.Schema({
    Did:{
        type:Number,
        required:true,
    },
    Dname:{
type:String,
required:true
    },
    Dmobile:{
        type:String,
        required:true
    }
});


module.exports=mongoose.model("Doctor",doctor);