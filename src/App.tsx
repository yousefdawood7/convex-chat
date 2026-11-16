import { useChat } from "./hooks/use-chat";
import { USERS } from "./data/mock-chat";
import { UserSwitcher } from "./components/user-switcher";
import { ChatContainer } from "./components/chat-container";

export default function App() {
  const {
    currentUserId,
    currentUser,
    otherUser,
    messages,
    inputText,
    messagesEndRef,
    setInputText,
    switchPerspective,
    handleSendMessage,
    handleKeyDown,
  } = useChat();

  return (
    <div className="min-h-screen bg-slate-100/70 flex flex-col items-center justify-center p-3 sm:p-6 font-sans">
      <UserSwitcher
        currentUserName={currentUser.name}
        onSwitch={switchPerspective}
      />

      <ChatContainer
        otherUser={otherUser}
        currentUser={currentUser}
        currentUserId={currentUserId}
        users={USERS}
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
