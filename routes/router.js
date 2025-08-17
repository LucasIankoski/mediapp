import { express } from "express";
import appointmentController from "./AppointmentsController";
import doctorController from "./DoctorController";
import patientController from "./PatientController";
import prescriptionController from "./PrescriptionController";

let router = express.Router();
router.get("/", (req, res) => {
  console.log("Hello from the API!");
  res.status(200).json({ message: "Hello from the API!" });
});

router.use("/appointments", appointmentController);
router.use("/doctors", doctorController);
router.use("/patients", patientController);
router.use("/prescriptions", prescriptionController);

export default router;