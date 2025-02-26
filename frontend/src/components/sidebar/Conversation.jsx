import React from "react";
import useConversation from "../../zustand/useConversation";
function Conversation({conversation,lastIdx,emoji}) {
  const {selectedConversation,setSelectedConversation}=useConversation();

  const isSelected=selectedConversation?._id===conversation._id;
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-400 rounded p-2 py-1 cursor-pointer
        ${isSelected? "bg-sky-400":""}
      `}
      onClick={()=>setSelectedConversation(conversation)}
      >
        <div className="avatar online relative">
          <div className="w-12 rounded-full">
            <img
              src={conversation.profilePic}
              alt="user avatar"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-300">{conversation.fullname}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" /> }
    </>
  );
}

export default Conversation;
