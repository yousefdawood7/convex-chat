import { useChat } from "./hooks/use-chat";
import { ChatContainer } from "./components/chat-container";
import { UserSwitcher } from "./components/user-switcher";

export default function App() {
  const {
    senderUser,
    recieverUser,
    messages,
    inputText,
    messagesEndRef,
    setInputText,
    handleSendMessage,
    handleKeyDown,
    switchUser,
  } = useChat();

  return (
    <div className="min-h-screen bg-slate-100/70 flex flex-col items-center justify-center p-3 sm:p-6 font-sans">
      <UserSwitcher
        currentUserName={senderUser?.name || "Unknown"}
        onSwitch={switchUser}
      />
      <ChatContainer
        senderUser={senderUser}
        recieverUser={recieverUser}
        messages={messages}
        messagesEndRef={messagesEndRef}
        inputText={inputText}
        onInputTextChange={setInputText}
        onSendMessage={handleSendMessage}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
