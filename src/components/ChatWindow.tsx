import React, { useRef, useEffect } from "react";
import { Friend, Message } from "../types";

interface ChatWindowProps {
  selectedFriend: Friend;
  messages: Message[];
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  selectedFriend,
  messages,
}) => {
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <div className="bg-white p-4 flex items-center border-b">
        <img
          src={selectedFriend.avatar}
          alt={selectedFriend.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <h2 className="text-xl font-bold">{selectedFriend.name}</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-xs p-2 rounded-lg ${
              message.sender === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-300"
            }`}
          >
            {message.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
    </>
  );
};
