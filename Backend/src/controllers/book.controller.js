import { Book } from '../db/models/book.model.js';
import { bookState } from '../config/constants.js';


export const createBook = async (req, res) => {
        
    try {
        const { title, synopsis, purchasePrice, rentalPrice, author, editorial } = req.body;
        
        
        const newBook = new Book({
            title,
            synopsis,
            purchasePrice,
            rentalPrice,
            author,
            editorial,
            bookState: bookState.AVAILABLE
        });

        await newBook.save();

        res.response(null, 'Book created successfully', 200);

    } catch (error) {
        console.log(error);
        res.response(null, error.message, 500);
    }
}


export const getBooks = async (req, res) => {
    
    try {
        const libros = await Book.find(
            { bookState: { $in: [bookState.AVAILABLE, bookState.RENTED] } },
            { __v: 0}
          );
          

        res.response(libros, 'Books retrieved successfully', 200);

    } catch (error) {
        console.log(error);
        res.response(null, error.message, 500);
    }
}

export const getBookById = async (req, res) => {
    try {
        const { id } = req.params;

        const book = await Book.findById(id, { __v: 0 });

        if (!book) {
            res.response(null, 'Book not found', 400);
            return;
        }

        res.response(book, 'Book retrieved successfully', 200);

    } catch (error) {
        console.log(error);
        res.response(null, error.message, 500);
    }
}

export const updateBookByID = async (req, res) => {
        
    try {
        const { id } = req.params;
        const { title, synopsis, purchasePrice, rentalPrice, author, editorial } = req.body;

        const isRegistered = await Book.findOne({ _id: id }, { title: 1 });

        if (!isRegistered) {
            res.response(null, 'Book not registered', 400);
            return;
        }

        await Book.updateOne({ _id: id }, { title, synopsis, purchasePrice, rentalPrice, author, editorial });

        res.response(null, 'Book updated successfully', 200);

    } catch (error) {
        console.log(error);
        res.response(null, error.message, 500);
    }

}

export const deleteBook = async (req, res) => {
try {
    const { id } = req.params;

    const isRegistered = await Book.findOne({ _id: id }, { title: 1 });

    if (!isRegistered) {
        res.response(null, 'Book not registered', 400);
        return;
    }

    await Book.deleteOne({ _id: id });

    res.response(null, 'Book deleted successfully', 200);

} catch (error) {
    console.log(error);
    res.response(null, error.message, 500);
}
}