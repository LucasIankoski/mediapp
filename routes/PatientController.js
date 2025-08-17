import express from "express";
import patientService from "../services/PatientService.js";

let router = express.Router();

router.get("/patients", async (req, res) => {
    try {
        const patients = await patientService.getAllPatients();
        res.send(patients);
    } catch (error) {
        console.error("Error fetching patients:", error);
        res.status(500).send(error);
    }
});

router.get("/patients/:id", async (req, res) => {
    try {
        res.send(await patientService.getById(req.params.id));
    } catch (error) {
        console.error("Error fetching patient:", error);
        res.status(500).send(error);
    }
});

router.post("/patients", async (req, res) => {
    try {
        await patientService.createPatient(req.body);
        res.status(201).send();
    } catch (error) {
        console.error("Error creating patient:", error);
        res.status(error.status || 500).send(error);
    }
});

router.put("/patients/:id", async (req, res) => {
    try {
        res.send(await patientService.updatePatient(req.params.id, req.body));
    } catch (error) {
        console.error("Error updating patient:", error);
        res.status(error.status || 500).send(error);
    }
});

router.delete("/patients/:id", async (req, res) => {
    try {
        await patientService.deletePatient(req.params.id);
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting patient:", error);
        res.status(error.status || 500).send(error);
    }
});


export default router;