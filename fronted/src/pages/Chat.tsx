import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import ChatItem from "../components/CHAT/ChatItem";
import { TbSend2 } from "react-icons/tb";


const Chat = () => {
  const staticChats = [
   {}
    
  ];
  
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [chats,setChats] = useState([])

  const handleSubmit = async () => {
    console.log(inputRef.current?.value)
  }

  return (
    <div className="flex w-full   mt-3 gap-3 flex-1" style={{ maxHeight: '90vh' }}>
      <div className="hidden md:flex lg:w-1/5 md:w-2/6 mb-2 font-semibold">
        <div className="flex width-full  bg-slate-400 mx-3  md:flex-col rounded-lg p-2">
          <div className="w-8 h-8 text-white rounded-full bg-black text-center mx-auto my-4">
            <p className="font-semibold text-2xl">
              {currentUser && currentUser.name ? (
                currentUser.name[0].toUpperCase()
              ) : (
                <FaUserCircle className="w-full text-white" />
              )}
            </p>
          </div>
          <div className="mx-auto my-4 p-3">
            <p> You are talking to a ChatBOT</p>
          </div>
          <div className="mx-auto my-4 p-3">
            <p>
              {" "}
              You can ask some questions related to Knowledge, Business,
              Advices, Education, etc. But avoid sharing personal information
            </p>
          </div>
          <button className="p-3 mx-auto bg-black font-semibold text-white my-4 rounded-lg">
            Clear Conversation
          </button>
        </div>
      </div>
      <div className="flex flex-grow-1 md:flex-grow-0.8 sm:flex-grow-1 xs:flex-grow-1 flex-col  w-full">
        <div className="text-center text-3xl font-semibold mx-auto">
          Model-GPT 3.5 Turbo
        </div>
        <div className="h-4/6 rounded-lg mx-auto flex flex-col overflow-scroll overflow-x-hidden scroll-smooth overflow-y-auto font-medium p-4">
        {staticChats.length > 1 ? (
    staticChats.map((chat, index) => (
      <ChatItem 
        key={index}
        content={chat.content} 
        role={chat.role} 
      />
    ))
  ) : (
    <p className="text-center text-gray-500">No messages yet. Start the conversation!</p>
  )}
</div>

<div className="flex w-5/6 mx-auto my-4 p-2 bg-slate-400 rounded-2xl mt-4  md:mt-10">
          <input
            ref={inputRef}
            type="text"
            className="flex-grow border-none outline-none bg-transparent py-1 placeholder-black"
            placeholder="Type your message..."
          />
          <button className="ml-3 p-2" onClick={handleSubmit}>
            <TbSend2 className="text-2xl hover:text-white" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Chat;
