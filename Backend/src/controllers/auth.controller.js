import { User } from "../db/models/user.model.js";

export const signUp = async (req, res) => {

    const { name, lastName, email, dpi, password } = req.body;
}

export const signInPassword = async (req, res) => {
    
    try{
        const { email, password } = req.body;

        
    } catch (error) {
        console.log(error);
        res.response(null, error.message, 400);
    }
}