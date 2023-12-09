import { Router } from "express";
import { signInPassword, signUp } from "../controllers/auth.controller.js";

const router = Router();

router.post("/sign/up", signUp);
router.post("/sign/in/password", signInPassword);

export default router;