import { express } from "express";

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


export default router;