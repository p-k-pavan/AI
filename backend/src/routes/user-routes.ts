import {Router} from "express";
import {getAllUsers, signUp} from "../controllers/user-controllers.js"

const userRouters = Router();

userRouters.get("/",getAllUsers);
userRouters.post("/sign-up",signUp)

export default userRouters;