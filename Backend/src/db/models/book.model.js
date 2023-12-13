import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
    title: String,
    synopsis: String,
    purchasePrice: Number,
    rentalPrice: Number,
    returnDate: Date,
    publicationDate: Date,
    author: String,
    editorial: String,
    bookState: Number
});

export const Book = model('books', bookSchema);