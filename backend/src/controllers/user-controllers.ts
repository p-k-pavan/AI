import User from "../models/User.js"
import bcrypt from "bcrypt"

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
            return res.status(400).json({ message: "Email already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashPassword, chat });
        await user.save();

        return res.status(201).json({ message: "User created successfully" });

    } catch (error) {
        console.error("Error during sign-up:", error);
        return res.status(500).json({ message: "Something went wrong, please try again" });
    }
};
