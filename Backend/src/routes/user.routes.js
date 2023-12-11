import { Router } from "express";
import { deleteUser, getBooks, getUser, updateInfoUser } from "../controllers/user.controller.js";

const router = Router();

router.get("/:id", getUser);
router.patch("/update/:id", updateInfoUser);
router.delete("/delete/:id", deleteUser);
router.get("/books/:id", getBooks);

export default router;