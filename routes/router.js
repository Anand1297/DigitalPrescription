const express= require('express');
const controllers= require('../controllers/controller')
 
const router = express.Router();

router.get('/get',controllers.getData);
//to get all Patient
router.post('/getPatient',controllers.getPatient);
// to add patient
router.post('/addPatient',controllers.createPatient);

router.post('/patientCheckup',controllers.PatientCheck);

module.exports= router;