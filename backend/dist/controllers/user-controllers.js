import User from "../models/User.js";
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: "ok", users });
    }
    catch (error) {
        return res.status(401).json({ message: "Error", error });
    }
};
//# sourceMappingURL=user-controllers.js.map