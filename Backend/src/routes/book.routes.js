import { Router } from "express";

import {createBook,getBooks,getBookById,updateBookByID,deleteBook,buyBook} from "../controllers/book.controller.js";

const router = Router();

router.get("/getBooks", getBooks);
router.post("/buyBook", buyBook);
router.post("/create", createBook);
router.patch("/update/:id", updateBookByID);
router.delete("/delete/:id", deleteBook);
router.get("/:id", getBookById);

export default router;