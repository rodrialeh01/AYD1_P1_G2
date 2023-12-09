import { Schema, model } from 'mongoose';

const historySchema = new Schema(
    {
        bookState: Number,
        idUser: String,
        idBook: String
    },
    {
        timestamps: true
    }
);

export const History = model('history', historySchema);