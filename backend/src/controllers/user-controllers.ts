import User from "../models/User.js"
import bcrypt from "bcrypt"
import {createToken} from "../utils/token-manager.js"

export const getAllUsers = async(req,res) =>{
    try {
        const users = await User.find()
        return res.status(200).json({message:"ok",users})
    } catch (error) {
        return res.status(401).json({message:"Error",error})
    }
}

export const signUp = async (req, res) => {
    try {
        const { name, email, password, chat } = req.body;

        const check_email = await User.findOne({ email });
       

        if (check_email) {
            return res.status(401).json({success: false, message: "Email already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashPassword, chat });
        await user.save();
        res.clearCookie("auth_token",{
            domain:"localhost",
            path:"/",
            httpOnly:true,
            signed:true
        });
        const token = createToken(user._id.toString(),user.email,"7d");
        const expires = new Date();
        expires.setDate(expires.getDate()+7);
        res.cookie("auth_token",token,{
            path:'/',
            domain:"localhost",
            expires,
            httpOnly:true,
            signed:true
        })

        return res.status(201).json({ message: "User created successfully",success:true });

    } catch (error) {
        console.error("Error during sign-up:", error);
        return res.status(500).json({success:false, message: "Something went wrong, please try again" });
    }
};


export const login = async (req, res) => {
    try {
        const {  email, password } = req.body;

        const user = await User.findOne({ email });
       
        if (!user) {
            return res.status(401).json({success:false, message: "Email does not exists" });
        }

        const isPassword = await bcrypt.compare(password,user.password);
        if (!isPassword) {
            return res.status(403).json({success:false, message: "invalid credential" });
        }

        res.clearCookie("auth_token",{
            domain:"localhost",
            path:"/",
            httpOnly:true,
            signed:true
        });
        const token = createToken(user._id.toString(),user.email,"7d");
        const expires = new Date();
        expires.setDate(expires.getDate()+7);
        res.cookie("auth_token",token,{
            path:'/',
            domain:"localhost",
            expires,
            httpOnly:true,
            signed:true
        })
        
        return res.status(201).json({ message: "User login successfully" ,success:true});

    } catch (error) {
        console.error("Error during login-up:", error);
        return res.status(500).json({ message: "Something went wrong, please try again" , success:false});
    }
};
