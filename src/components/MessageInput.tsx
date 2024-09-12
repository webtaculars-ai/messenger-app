import React, { useState } from "react";
import { Send } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
}) => {
  const [inputMessage, setInputMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      onSendMessage(inputMessage);
      setInputMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 flex">
      <input
        type="text"
        value={inputMessage}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputMessage(e.target.value)
        }
        placeholder="Type a message..."
        className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <Send size={24} />
      </button>
    </form>
  );
};
