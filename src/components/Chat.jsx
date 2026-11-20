import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addConnections } from "../utils/connectionsSlice";

const Chat = () => {
  const user = useSelector((store) => store.user);
  const connections = useSelector((store) => store.connections);
  const userId = user?._id;
  const { targetUserId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  // 1. Fetch connections if Redux store doesn't have them yet (e.g., on page refresh)
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error("Failed to fetch connections:", err);
    }
  };

  useEffect(() => {
    if (!connections) {
      fetchConnections();
    }
  }, [connections]);

  // 2. Find the person you are currently chatting with (e.g., Spidey)
  const targetUser = connections?.find((conn) => conn._id === targetUserId);

  useEffect(() => {
    if (!userId || !targetUserId) return;

    // Reset messages when switching to a different chat user
    setMessages([]);

    const socket = createSocketConnection();
    socketRef.current = socket;

    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });

    socket.on("messageReceived", ({ firstName, text }) => {
      setMessages((prevMessages) => [...prevMessages, { firstName, text }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !socketRef.current) return;

    socketRef.current.emit("sendMessage", {
      firstName: user.firstName,
      userId,
      targetUserId,
      text: message,
    });

    setMessage("");
  };

  if (!user) return null;

  return (
    <div className="h-[calc(100vh-90px)] flex bg-base-200 rounded-xl shadow-lg m-4">
      {/* Left Sidebar: All Connections / Conversation List */}
      <div className="w-1/3 border-r border-base-300 flex flex-col">
        <div className="p-5">
          <h2 className="text-xl font-bold">Chats</h2>
          <input
            type="text"
            placeholder="Search conversations..."
            className="input input-bordered w-full mt-4"
          />
        </div>

        {/* Dynamic Conversation List */}
        <div className="flex-1 overflow-y-auto">
          {connections?.map((conn) => {
            const isSelected = conn._id === targetUserId;
            return (
              <div
                key={conn._id}
                onClick={() => navigate("/chat/" + conn._id)}
                className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-base-300 ${
                  isSelected ? "bg-base-300" : ""
                }`}
              >
                <img
                  src={conn.photoUrl}
                  className="w-12 h-12 rounded-full object-cover"
                  alt={conn.firstName}
                />
                <div className="flex-1">
                  <h3 className="font-semibold">
                    {conn.firstName} {conn.lastName}
                  </h3>
                  <p className="text-sm text-gray-500 truncate">
                    {isSelected && messages.length > 0
                      ? messages[messages.length - 1].text
                      : "Click to chat"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Chat Section */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header: Shows Target User (Spidey), NOT Logged-in User */}
        <div className="flex items-center gap-3 p-4 border-b border-base-300">
          <img
            src={targetUser?.photoUrl || "https://via.placeholder.com/150"}
            className="w-12 h-12 rounded-full object-cover"
            alt={targetUser?.firstName || "User"}
          />
          <div>
            <h3 className="font-bold">
              {targetUser
                ? `${targetUser.firstName} ${targetUser.lastName || ""}`
                : "Loading..."}
            </h3>
            <p className="text-xs text-success">Online</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg, index) => {
            const isMe = msg.firstName === user.firstName;
            return (
              <div
                key={index}
                className={`chat ${isMe ? "chat-end" : "chat-start"}`}
              >
                <div className="chat-image avatar">
                  <div className="w-8 rounded-full">
                    <img
                      src={isMe ? user.photoUrl : targetUser?.photoUrl}
                      alt={msg.firstName}
                    />
                  </div>
                </div>
                <div className="chat-header text-xs opacity-70 mb-1">
                  {msg.firstName}
                </div>
                <div
                  className={`chat-bubble ${
                    isMe
                      ? "chat-bubble-primary"
                      : "bg-base-300 text-base-content"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            );
          })}
        </div>

        {/* Message Input */}
        <form
          onSubmit={sendMessage}
          className="flex items-center gap-3 p-4 border-t border-base-300"
        >
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
