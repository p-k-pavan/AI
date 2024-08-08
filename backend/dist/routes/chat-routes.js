import { Router } from "express";
import { chatValidator, validate } from "../utils/validators.js";
import { generateChatCompletion } from "../controllers/chat-controllers.js";
import { verfifyToken } from "../utils/token-manager.js";
const chatRouters = Router();
chatRouters.post("/new", validate(chatValidator), verfifyToken, generateChatCompletion);
export default chatRouters;
//# sourceMappingURL=chat-routes.js.map