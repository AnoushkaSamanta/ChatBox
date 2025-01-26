import React from "react";

function Message() {
  return (
    <div className="chat chat-end gap-2 flex flex-col items-end">
      {/* Message Row */}
      <div className="flex items-center gap-5">
        {/* Chat Bubble */}
        <div className="chat-bubble chat-bubble-info px-4 py-2">
          Hello
        </div>
        {/* Avatar */}
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt="User Avatar"
          className="w-6 h-6 rounded-full shadow-md"
        />
      </div>

      {/* Timestamp */}
      <span className="text-xs text-gray-500 mt-1">
        12:45 PM
      </span>
    </div>
  );
}

export default Message;
