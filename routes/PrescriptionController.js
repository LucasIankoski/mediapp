import express from "express";
import prescriptionService from "../services/PrescriptionService.js";

let router = express.Router();

router.get("/prescriptions", async (req, res) => {
    try {
        const prescriptions = await prescriptionService.getAllPrescriptions();
        res.send(prescriptions);
    } catch (error) {
        console.error("Error fetching prescriptions:", error);
        res.status(500).send(error);
    }
});

router.get("/prescriptions/:id", async (req, res) => {
    try {
        res.send(await prescriptionService.getById(req.params.id));
    } catch (error) {
        console.error("Error fetching prescription:", error);
        res.status(500).send(error);
    }
});

router.post("/prescriptions", async (req, res) => {
    try {
        res.send(await prescriptionService.createPrescription(req.body));
    } catch (error) {
        console.error("Error creating prescription:", error);
        res.status(error.status || 500).send(error);
    }
});

router.put("/prescriptions/:id", async (req, res) => {
    try {
        res.send(await prescriptionService.updatePrescription(req.params.id, req.body));
    } catch (error) {
        console.error("Error updating prescription:", error);
        res.status(error.status || 500).send(error);
    }
});

router.delete("/prescriptions/:id", async (req, res) => {
    try {
        await prescriptionService.deletePrescription(req.params.id);
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting prescription:", error);
        res.status(error.status || 500).send(error);
    }
});

export default router;