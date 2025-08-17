import express from "express";
import appointmentService from "../services/AppointmentsService.js";

let router = express.Router();

router.get("/appointments", async (req, res) => {
    try {
        const appointments = await appointmentService.getAllAppointments();
        res.send(appointments)
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).send(error);
    }
});

router.get("/appointments/:id", async (req, res) => {
    try {
        res.send(await appointmentService.getById(req.params.id));
    } catch (error) {
        console.error("Error fetching appointment:", error);
        res.status(500).send(error);
    }
});

router.post("/appointments", async (req, res) => {
    try {
        res.send(await appointmentService.createAppointment(req.body));
    } catch (error) {
        console.error("Error creating appointment:", error);
        res.status(error.status || 500).send(error);
    }
});

router.put("/appointments/:id", async (req, res) => {
    try {
        res.send(await appointmentService.updateAppointment(req.params.id, req.body));
    } catch (error) {
        console.error("Error updating appointment:", error);
        res.status(error.status || 500).send(error);
    }
});

router.delete("/appointments/:id", async (req, res) => {
    try {
        await appointmentService.deleteAppointment(req.params.id);
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting appointment:", error);
        res.status(error.status || 500).send(error);
    }
});

export default router;