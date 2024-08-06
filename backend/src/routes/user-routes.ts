import {Router} from "express";
import {getAllUsers, signUp,login} from "../controllers/user-controllers.js"
import { signUpValidator, validate ,loginValidator} from "../utils/validators.js";


const userRouters = Router();

userRouters.get("/",getAllUsers);
userRouters.post("/sign-up",validate(signUpValidator),signUp)
userRouters.post("/login",validate(loginValidator),login)

export default userRouters;