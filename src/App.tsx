import React, { useState } from "react";
import { FriendsList } from "./components/FriendsList";
import { ChatWindow } from "./components/ChatWindow";
import { MessageInput } from "./components/MessageInput";

import { friends } from "./data/friends";
import { Friend, Messages } from "./types";

const App: React.FC = () => {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [messages, setMessages] = useState<Messages>({});

  const handleSendMessage = (message: string) => {
    if (selectedFriend) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedFriend.id]: [
          ...(prevMessages[selectedFriend.id] || []),
          { text: message, sender: "user" },
        ],
      }));
    }
  };

  const handleBack = () => {
    setSelectedFriend(null);
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <div
        className={`w-full md:w-1/4 bg-white border-r ${
          selectedFriend ? "hidden md:block" : ""
        }`}
      >
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelectFriend={setSelectedFriend}
        />
      </div>
      <div
        className={`w-full md:flex-1 flex flex-col ${
          !selectedFriend ? "hidden md:flex" : ""
        }`}
      >
        {selectedFriend ? (
          <>
            <ChatWindow
              selectedFriend={selectedFriend}
              messages={messages[selectedFriend.id] || []}
              onBack={() => setSelectedFriend(null)}
            />
            <MessageInput onSendMessage={handleSendMessage} />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-100">
            <p className="text-xl text-gray-500">
              Select a friend to start chatting
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
