const patient = require('./data/patient.js');
const gpInfo = require('./data/gp-info.js');


module.exports = config => (req, res, next) => {
  res.locals.serviceName = config.serviceName;
  if (req.session.data["role"] == undefined) {
    req.session.data["role"] = "csas";
  }

  // default to version 10 of the PNL flow
  if (req.session.data["pnlversion"] == undefined) {
    req.session.data["pnlversion"] = "10";
  }

  // default to version 2 of the patient summary
  if (req.session.data["patversion"] == undefined) {
    req.session.data["patversion"] = "2";
  }

  // default to version 2 of the NRL
  if (req.session.data["nrlversion"] == undefined) {
    req.session.data["nrlversion"] = "2";
  }

  // load the basic data for PNL
  if (req.session.data["patients"] == undefined) {
    req.session.data["patients"] = patient.getPatients();
  }

  // load the basic data for NRL
  if (req.session.data["nrl_patients"] == undefined) {
    req.session.data["nrl_patients"] = patient.getPatients("nrl");
  }

  //req.session.data["nrl_patients"] = patient.getPatients("nrl");
  //var patients = patient.getPatients("nrl");
  //r//eq.session.data["_nrl_patients"] = patients;
  //res.redirect("/" + getVersion(req) + "/non-responder/non-responder-" + getNotificationVersion(req))

  // load the basic data for someone selected as part of the PNL
  if (req.session.data["pnl_patient"] == undefined) {
    req.session.data["pnl_patient"] = patient.getPatient(9991023867);
  }

  // load the basic data for someone selected as part of the Patient Summary
  if (req.session.data["patientSummary"] == undefined) {
    req.session.data["patientSummary"] = patient.getPatient(9991023867);
  }

  if (req.session.data["gpinfo"] == undefined) {
    req.session.data["gpinfo"] = gpInfo.getGPInfo();
  }

  

  next();
};
