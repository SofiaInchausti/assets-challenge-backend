import { Router } from "express";

const router = Router();

router.get("/user", (req, res) => res.send("hello from user routes"));

export default router;
