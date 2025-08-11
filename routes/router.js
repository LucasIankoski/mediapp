import { express } from "express";

let router = express.Router();
router.get("/", (req, res) => {
  console.log("Hello from the API!");
  res.status(200).json({ message: "Hello from the API!" });
});

export default router;