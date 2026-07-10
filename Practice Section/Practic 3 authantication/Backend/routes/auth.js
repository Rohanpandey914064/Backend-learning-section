const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

router.post('/signup', async (req,res)=>{
    try{
        const {name,email,password} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({
            message: "Signup Successful",
        });
    }catch (error){
        res.status(500).json({
            message: error.message,
        });
    }
});

router.post('/login', async (req,res)=>{
    try{
        const {email,password} = req.body;

        const user = await User.findOne({email});

        if(!user) {
            return res.status(400).json({
                message: "User Not Found",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).json({
                message: "Invalid Password",
            });
        }

        res.status(200).json({
            message: "Login Successful",
            name: user.name,
            email: user.email,
        });

    }catch (error){
        res.status(500).json({
            message: error.message,
        });
    }
});

module.exports = router;