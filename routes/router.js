import express from "express";
import appointmentController from "./AppointmentsController.js";
import doctorController from "./DoctorController.js";
import patientController from "./PatientController.js";
import prescriptionController from "./PrescriptionController.js";
import doctorService from "../services/DoctorService.js";
import verifyToken from "../middlewares/authMiddleware.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

let router = express.Router();
router.get("/", (req, res) => {
  console.log("Hello from the API!");
  res.status(200).json({ message: "Hello from the API!" });
});

router.post("/login", async (req, res) => {
  const { login, password } = req.body;

  try {
    const doctor = await doctorService.getDoctorByLogin(login);
    if (!doctor) {
      return res.status(401).json({ error: "Doctor not found." });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    const token = jwt.sign({ doctorId: doctor._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token });

  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
});

router.use("/", verifyToken, appointmentController);
router.use("/", verifyToken, doctorController);
router.use("/", verifyToken, patientController);
router.use("/", verifyToken, prescriptionController);

export default router;