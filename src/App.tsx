import React, { useState } from "react";
import { FriendsList } from "./components/FriendsList";
import { ChatWindow } from "./components/ChatWindow";
import { friends } from "./data/friends";
import { Friend } from "./types";

const App: React.FC = () => {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  return (
    <div className="flex h-screen bg-gray-100">
      <FriendsList friends={friends} />
      <div className="flex-1 flex flex-col">
        {selectedFriend ? (
          <>
            <ChatWindow selectedFriend={selectedFriend} />
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
