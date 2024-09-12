export interface Friend {
  id: number;
  name: string;
  avatar: string;
}

export interface Message {
  text: string;
  sender: "user" | "friend";
}

export type Messages = Record<number, Message[]>;
