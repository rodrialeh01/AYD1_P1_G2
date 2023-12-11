import { Router } from "express";

import {createBook,getBooks,getBookById,updateBookByID,deleteBook} from "../controllers/book.controller.js";

const router = Router();

router.get("/getBooks", getBooks);
router.post("/create", createBook);
router.patch("/update/:id", updateBookByID);
router.delete("/delete/:id", deleteBook);
router.get("/:id", getBookById);

export default router;