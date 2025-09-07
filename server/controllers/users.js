import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import User from '../models/user.js';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // find user account by email
        const existingUser = await User.findOne({ email });

        // if can't find, return 404
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist." });

        // if account exists, see if password matches
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        // if passwords don't match, return 400
        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." })
        
        // create a jwt & sign in with your secret (later stored in .env)
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', {expiresIn: "1h"});
        
        // return user data & jwt token
        res.status(200).json({ result: existingUser, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        
        const existingUser = await User.findOne({ email });

        // check if the user exists
        if(existingUser) return res.status(400).json({ message: "User already exists." });

        // check if confirm password matches confirmPassword
        if(password !== confirmPassword) return res.status(400).json({message: "Passwords don't match."});
        
        // create user
        // encrypt password
        const hashedPassword = await bcrypt.hash(password, 12);
        
        // create user
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` })
        
        // create token
        const token = jwt.sign({ email: result.email, id: result._id }, 'test', {expiresIn: '1h'});

        // return user data & jwt token
        res.status(200).json({ result, token})
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }

};
 