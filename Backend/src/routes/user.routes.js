import { Router } from "express";
import { getUser, updateInfoUser } from "../controllers/user.controller.js";

const router = Router();

router.get("/:id", getUser);
router.post("/update", updateInfoUser);

export default router;