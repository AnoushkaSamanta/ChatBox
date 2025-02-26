import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const profilePic=fromMe?authUser.profilePic:selectedConversation?.profilePic;
  const bubbleBgColor=fromMe?"bg-blue-500":"";

  const chatClassName = fromMe ? "chat-end" : "chat-start";

  return (
    <div className={`chat ${chatClassName} gap-2 flex flex-col items-end`}>
      <div className="flex items-center gap-5">
        <div className={`chat-bubble  px-4 py-2 text-white ${bubbleBgColor}`}>{message.message}</div>

        <img
          src={profilePic}
          alt="User Avatar"
          className="w-6 h-6 rounded-full shadow-md"
        />
      </div>

      {/* Timestamp */}
      <span className="text-xs text-gray-500 mt-1">12:45 PM</span>
    </div>
  );
}

export default Message;
