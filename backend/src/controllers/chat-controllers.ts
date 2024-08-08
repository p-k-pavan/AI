import { configureOpenAI } from "../config/openai-config.js";
import User from "../models/User.js";
import { OpenAIApi, ChatCompletionRequestMessage } from "openai";

export const generateChatCompletion = async (req, res, next) => {
  try {
    const { message } = req.body;
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res
        .status(401)
        .json({ message: "To continue, sign in first", success: false });
    }

    const chats = user.chats.map((chat) => ({
      role: chat.role,
      content: chat.content,
    })) as ChatCompletionRequestMessage[];

    chats.push({ content: message, role: "user" });
    user.chats.push({ content: message, role: "user" });

    const config = configureOpenAI();
    const openai = new OpenAIApi(config);
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: chats,
    });

    user.chats.push(response.data.choices[0].message);
    await user.save();

    return res.status(200).json({ chats: user.chats ,success:true});
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error ,success:false});
  }
};
