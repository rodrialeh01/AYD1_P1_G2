import { Router } from "express";

import {createBook, getBooks,getBookById,updateBookByID,deleteBook} from "../controllers/book.controller.js";

const router = Router();

router.get("/:id", getBookById);
router.post("/create", createBook);
router.get("/getBooks", getBooks);
router.patch("/update/:id", updateBookByID);
router.delete("/delete/:id", deleteBook);


export default router;