import bycryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

export const signUp = async (req, res, next) => {
const {username, email, password} = req.body;

if (!username || !email || !password === username === '' || email === '' || password === '' ) {
   next(errorHandler(400, 'All field is required'));
}

const hashedPassword = bycryptjs.hashSync(password, 10);

const newUser = new User({
    username,
    email,
    password : hashedPassword
})

try {
    
    await newUser.save();
    res.json('SignUp Successfull...')
} catch (error) {
    next(error);
}


}