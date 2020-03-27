const mongoose= require('mongoose');
const patient= new mongoose.Schema({
    Pname: {
type :String,
required:true,
},
    Pmobile :{
type :String,
required:true
},
Pemail:{
    type:String,
    required:true
},
Page:{
    type:Number,
    //required:true
},
Padrress:{
    type:String,
    // required:true
}
});

module.exports= mongoose.model("Patient",patient);
