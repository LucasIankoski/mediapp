import express from "express";
import appointmentController from "./AppointmentsController.js";
import doctorController from "./DoctorController.js";
import patientController from "./PatientController.js";
import prescriptionController from "./PrescriptionController.js";

let router = express.Router();
router.get("/", (req, res) => {
  console.log("Hello from the API!");
  res.status(200).json({ message: "Hello from the API!" });
});

router.use("/", appointmentController);
router.use("/", doctorController);
router.use("/", patientController);
router.use("/", prescriptionController);

export default router;