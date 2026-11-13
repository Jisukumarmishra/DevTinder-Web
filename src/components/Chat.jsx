import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { targetUserId } = useParams();
  const [message, setMessage] = useState("");
  console.log("Target User ID:", targetUserId);
  return (
    <div className="h-[90vh] flex bg-base-200 rounded-xl overflow-hidden shadow-lg m-4">
      {/* Left Sidebar */}
      <div className="w-1/3 border-r border-base-300 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-5 bg-base-300">
          <h2 className="text-xl font-bold">Chats</h2>
          <input
            type="text"
            placeholder="Search conversations..."
            className="input input-bordered w-full mt-4"
          />
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex items-center gap-3 p-4 hover:bg-base-300 cursor-pointer">
            <img
              src="https://i.pravatar.cc/150?img=12"
              className="w-12 h-12 rounded-full"
              alt="User"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Rahul</h3>
              <p className="text-sm text-gray-500">Hello!</p>
            </div>
            <span className="text-xs text-gray-500">10:30</span>
          </div>

          <div className="flex items-center gap-3 p-4 hover:bg-base-300 cursor-pointer">
            <img
              src="https://i.pravatar.cc/150?img=5"
              className="w-12 h-12 rounded-full"
              alt="User"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Amit</h3>
              <p className="text-sm text-gray-500">How are you?</p>
            </div>
            <span className="text-xs text-gray-500">Yesterday</span>
          </div>
        </div>
      </div>

      {/* Right Chat Section */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center gap-3 p-4 bg-base-300 border-b border-base-300">
          <img
            src="https://i.pravatar.cc/150?img=12"
            className="w-12 h-12 rounded-full"
            alt="User"
          />
          <div>
            <h3 className="font-bold">Rahul</h3>
            <p className="text-xs text-success">Online</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          <div className="chat chat-start">
            <div className="chat-bubble bg-base-300 text-base-content">
              Hey! How are you?
            </div>
          </div>

          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-primary">
              I'm good. What about you?
            </div>
          </div>

          <div className="chat chat-start">
            <div className="chat-bubble bg-base-300 text-base-content">
              I'm doing great!
            </div>
          </div>
        </div>

        {/* Message Input */}
        <form className="flex items-center gap-3 p-4 border-t border-base-300">
          <input
            type="text"
            placeholder="Type a message..."
            className="input input-bordered flex-1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
