import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";

function Conversations() {
const {loading,conversations}=useGetConversations()
console.log(conversations);

  return (
    <div className="overflow-auto">
      <div className="py-2 flex-1  w-[300px]">
      {conversations.map((conversation, idx) => (
  <Conversation 
    key={conversation._id}
    conversation={conversation}
    emoji={getRandomEmoji()}
    lastIdx={idx === conversations.length - 1}
  />
))}

      {loading ? <span className='loading loading-spinner'></span> : null}
      </div>
    </div>
  );
}

export default Conversations;
