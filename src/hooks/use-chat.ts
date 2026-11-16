import { useMutation, useQuery } from "convex/react";
import { useEffect, useRef, useState } from "react";
import { api } from "../../convex/_generated/api";

export function useChat() {
  const [currentUser, setCurrentUser] = useState<
    "Yousef Dawood" | "Islam Machachev"
  >("Yousef Dawood");

  const [senderUser] =
    useQuery(api.users.getUser, {
      name: currentUser,
    }) ?? [];

  const [recieverUser] =
    useQuery(api.users.getUser, {
      name:
        currentUser === "Yousef Dawood" ? "Islam Machachev" : "Yousef Dawood",
    }) ?? [];

  const messages = useQuery(api.messages.getAllMessages);

  const addMessage = useMutation(api.messages.sendMessage);

  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e?: React.SubmitEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || !senderUser || !recieverUser || !messages) return;

    addMessage({
      message: inputText,
      sender_id: senderUser._id,
      reciever_id: recieverUser._id,
    });

    setInputText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  function switchUser() {
    setCurrentUser((prevUser) =>
      prevUser === "Yousef Dawood" ? "Islam Machachev" : "Yousef Dawood",
    );
  }

  return {
    senderUser,
    recieverUser,
    messages,
    inputText,
    messagesEndRef,
    setInputText,
    handleSendMessage,
    handleKeyDown,
    switchUser,
  };
}
