import { Router } from "express";
import { getAllUsers, signUp } from "../controllers/user-controllers.js";
import { signUpValidator, validate } from "../utils/validators.js";
const userRouters = Router();
userRouters.get("/", getAllUsers);
userRouters.post("/sign-up", validate(signUpValidator), signUp);
export default userRouters;
//# sourceMappingURL=user-routes.js.map