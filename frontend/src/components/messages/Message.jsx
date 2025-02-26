import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-zinc-800";
  const formattedTime=extractTime(message.createdAt)
 
  
  // This class correctly determines the alignment
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-6 h-6 rounded-full">
          <img src={profilePic} alt="User Avatar" className="shadow-md" />
        </div>
      </div>
      
      <div className={`chat-bubble ${bubbleBgColor} text-white`}>
        {message.message}
      </div>
      
      <div className="chat-footer opacity-75 text-xs text-zinc-500 mt-1">
        {formattedTime}
      </div>
    </div>
  );
}

export default Message;
