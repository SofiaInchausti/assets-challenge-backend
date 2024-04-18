import { Router } from "express";

const router = Router();

router.get("/asset", (req, res) => res.send("hello from asset routes"));

export default router;
