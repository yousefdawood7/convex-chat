export interface User {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "offline";
  role: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  status?: "sent" | "delivered" | "read";
}
