import { Router } from "express";

const router = Router();

router.get("/developer", (req, res) => res.send("hello from developer routes"));

export default router;
