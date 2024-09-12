import React from "react";
import { FriendsList } from "./components/FriendsList";
import { friends } from "./data/friends";

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <FriendsList friends={friends} />
    </div>
  );
};

export default App;
