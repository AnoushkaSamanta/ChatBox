import React from "react";
import Conversation from "./Conversation";

function Conversations() {
  return (
    <div>
      <div className="py-2 flex flex-col overflow-auto w-[300px]">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    </div>
  );
}

export default Conversations;
