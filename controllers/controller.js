const Patient = require('../models/patient');
const PatientCheckUp= require('../models/patientData');
const createError=require('http-errors');
const mongoose= require('mongoose');

const getData =(rq,res)=>{
    res.send("Hello")
}

const getPatient= async(req,res,next)=>{
try{
    const patient= req.body.Pname;
const getPatient = await Patient.find({Pname:{$regex:patient,$options:'i'}},{__v:0});
// if(getPatient.length==0){
//    throw createError(404,"Patient not found");
// }
res.status(200).send(getPatient);
}catch(error){
res.send(error.message());
//next(error);
}

};

const createPatient= async (req,res,next)=>{
    try{
        const addPatient= Patient(req.body);
         const result=await addPatient.save();

          res.send(result);
        console.log(addPatient);
    }catch(error){
console.log(error.message);
    }
};

const PatientCheck=async(req,res,next)=>{
try{
    const tag=req.body.tag;
const prescription= req.body.prescription;
const doctorId= req.body.doctorId;
const patientId= req.body.patientId;

const data={};
data[tag]=[{"prescription":prescription,"Doctorid":doctorId}];
data["Pid"]=patientId;
const checkUpData = PatientCheckUp(data);
const result=await checkUpData.save();
res.send(result);
console.log(data);
}catch(error){
    console.log(error.message);
}
};


module.exports.getPatient=getPatient;
module.exports.createPatient=createPatient;
module.exports.PatientCheck=PatientCheck;
module.exports.getData=getData;