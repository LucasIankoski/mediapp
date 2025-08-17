import express from "express";
import doctorService from "../services/DoctorService.js";

let router = express.Router();

router.get("/doctors", async (req, res) => {
    try {
        const doctors = await doctorService.getAllDoctors();
        res.send(doctors);
    } catch (error) {
        console.error("Error fetching doctors:", error);
        res.status(500).send(error);
    }
});

router.get("/doctors/:id", async (req, res) => {
    try {
        res.send(await doctorService.getById(req.params.id));
    } catch (error) {
        console.error("Error fetching doctor:", error);
        res.status(500).send(error);
    }
});

router.post("/doctors", async (req, res) => {
    try {
        await doctorService.createDoctor(req.body);
        res.status(201).send();
    } catch (error) {
        console.error("Error creating doctor:", error);
        res.status(error.status || 500).send(error);
    }
});

router.put("/doctors/:id", async (req, res) => {
    try {
        res.send(await doctorService.updateDoctor(req.params.id, req.body));
    } catch (error) {
        console.error("Error updating doctor:", error);
        res.status(error.status || 500).send(error);
    }
});

router.delete("/doctors/:id", async (req, res) => {
    try {
        await doctorService.deleteDoctor(req.params.id);
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting doctor:", error);
        res.status(error.status || 500).send(error);
    }
});


export default router;