import { Router } from "express";
import { getAllUsers } from "../controllers/user-controllers.js";
const userRouters = Router();
userRouters.get("/", getAllUsers);
export default userRouters;
//# sourceMappingURL=user-routes.js.map