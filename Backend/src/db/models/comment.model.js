import { Schema, model } from 'mongoose';

const commentSchema = new Schema({
    name: String,
    lastName: String,
    idUser: String,
    comment: String,
    idBook: String
});

export const Comment = model('comments', commentSchema);