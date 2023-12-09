import { User } from '../db/models/user.model.js';

export const getUser = async (req, res) => {
    try{
        const { id } = req.params;

        const dataUser = await User.findOne({ _id:id }, { __v: 0, password: 0 });

        res.response(dataUser);

    } catch (error) {
        res.response(null, error.message, 400);
    }
};

export const updateInfoUser = async (req, res) => {
    
    try
    {
        const { name, lastName, dpi, password } = req.body;
        const { user:email } = req;

        const userLogged = await User.findOne({ email }, { password: 1 });

        // const hash = crypto.createHash('sha256').update(password).digest('hex') + "s3m1s0c1a1**";

        // if (userLogged.password !== hash) {
        //     return res.response(null, "Password incorrect", 400);
        // }

        
    } catch (error) {
        console.log(error);
        res.response(null, error.message, 400);
    }

}