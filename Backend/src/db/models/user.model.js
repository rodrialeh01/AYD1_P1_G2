import { Schema, model } from 'mongoose';
// import bcrypt from 'bcrypt';

const userSchema = new Schema({
    name: String,
    lastName: String,
    phone: String,
    email: String,
    password: String,
    birthDate: Date,
    role: Number,
    rentedBooks: Array,
    purchasedBooks: Array
});

// userSchema.methods.encryptPassword = async (password) => {
//     const salt = await bcrypt.genSalt(5);
//     return bcrypt.hash(password, salt);
// };

// userSchema.methods.validatePassword = function (password) {
//     return bcrypt.compare(password, this.password);
// };

export const User = model('users', userSchema);