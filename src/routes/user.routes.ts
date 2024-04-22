import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  loginUser
} from "../controllers/user.controllers";

const router = Router();

router.post("/users", createUser);
router.post("/users/login", loginUser)
router.get("/users", getUsers);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/users/:id", getUser);
export default router;
