import { Router } from "express";
import {
  createDeveloper,
  deleteDeveloper,
  getDeveloper,
  getDevelopers,
  updateDeveloper,
} from "../controllers/developer.controllers";

const router = Router();

router.post("/developers", createDeveloper);
router.get("/developers", getDevelopers);
router.put("/developers/:id", updateDeveloper);
router.delete("/developers/:id", deleteDeveloper);
router.get("/developers/:id", getDeveloper);

export default router;
