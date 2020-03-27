const mongoose= require('mongoose');

const patientData= mongoose.Schema({
    Dental:[{prescription:{type:String},Doctorid:{type:Number}}],
    General:[{prescription:{type:String},Doctorid:{type:Number}}],
    Cardiology:[{prescription:{type:String},Doctorid:{type:Number}}],
    Pid:{type:mongoose.Schema.Types.ObjectId,ref:'Patient'},
});

module.exports=mongoose.model("PatientData",patientData);