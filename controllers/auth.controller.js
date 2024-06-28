import bycryptjs from 'bcryptjs';
import User from '../api/models/user.model.js';

export const signUp = async (req, res) => {
const {username, email, password} = req.body;

if (!username || !email || !password === username === '' || email === '' || password === '' ) {
    return res.status(400).json({message:'All field are required'})
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
    res.status(500).json({message: error.message});    
}


}