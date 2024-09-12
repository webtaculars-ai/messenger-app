import React from "react";
import { Friend } from "../types";

interface FriendsListProps {
  friends: Friend[];
  selectedFriend: Friend | null;
  onSelectFriend: (friend: Friend) => void;
}

export const FriendsList: React.FC<FriendsListProps> = ({
  friends,
  selectedFriend,
  onSelectFriend,
}) => (
  <div className="bg-white border-r">
    <h2 className="text-xl font-bold p-4 border-b">Friends</h2>
    <ul>
      {friends.map((friend) => (
        <li
          key={friend.id}
          className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer ${
            selectedFriend?.id === friend.id ? "bg-blue-100" : ""
          }`}
          onClick={() => onSelectFriend(friend)}
        >
          <img
            src={friend.avatar}
            alt={friend.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <span>{friend.name}</span>
        </li>
      ))}
    </ul>
  </div>
);
