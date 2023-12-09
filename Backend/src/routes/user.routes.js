import { Router } from "express";
import { getUser, updateInfoUser } from "../controllers/user.controller.js";

const router = Router();

router.get("/user/:id", getUser);
router.post("/user/update/info", updateInfoUser);

export default router;