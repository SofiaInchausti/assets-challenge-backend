import { Router } from "express";
import {
  createAsset,
  deleteAsset,
  getAsset,
  getAssets,
  updateAsset,
} from "../controllers/asset.controllers";

const router = Router();

router.post("/assets", createAsset);
router.get("/assets", getAssets);
router.put("/assets/:id", updateAsset);
router.delete("/assets/:id", deleteAsset);
router.get("/assets/:id", getAsset);

export default router;
