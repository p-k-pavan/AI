import React from "react";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { PiOpenAiLogo } from "react-icons/pi";

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  return role === "assistant" ? (
    <div className="flex p-2 bg-slate-300 my-2 gap-2 rounded-lg">
      <div className="ml-0 w-8 h-8 rounded-full">
        <PiOpenAiLogo className="text-white rounded-full bg-black text-2xl" />
      </div>
      <div className="font-medium">{content}</div>
    </div>
  ) : (
    <div className="flex p-2 bg-gray-400  gap-2 rounded-lg">
    <div className=" ml-0 w-8 h-8  rounded-full ">
            <p className="font-mediam text-2xl bg-black text-white rounded-full text-center">
              {currentUser && currentUser.name ? (
                currentUser.name[0].toUpperCase()
              ) : (
                <FaUserCircle className="w-full" />
              )}
            </p>
          </div>
    <div className="font-medium">{content}</div>
  </div>
  );
};

export default ChatItem;
