import { telegram } from "#lib/telegram";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function Messenger() {
  const { data: chats } = useChats();
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);
  const { data: messages } = useMessages(selectedChatId);
  const [message, setMessage] = useState("");
  console.log(messages);

  if (!chats) return null;

  return (
    <div className="flex h-screen font-sans">
      {/* Chats list */}
      <aside className="w-72 border-r border-gray-200 bg-gray-50 p-4">
        <h2 className="text-lg font-semibold">Chats</h2>
        <ul>
          {chats.map((chat) => (
            <li
              key={chat.id}
              className="cursor-pointer border-b border-gray-100 py-2"
              onClick={() => setSelectedChatId(chat.id)}
            >
              {chat.title}
            </li>
          ))}
        </ul>
      </aside>
      {/* Chat screen */}
      <main className="flex-1 bg-white p-4">
        <h2 className="text-lg font-semibold">Chat Screen</h2>
        <div className="h-[80vh] overflow-y-auto rounded border border-gray-100 bg-gray-100 p-4">
          {messages?.map((message) => (
            <div key={message.id} className="mb-4">
              {message.content.text.text}
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 rounded border border-gray-300 p-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="cursor-pointer rounded bg-blue-700 px-4 py-2 text-white"
            onClick={() => {
              if (selectedChatId) {
                telegram.sendMessage(selectedChatId, message);
                setMessage("");
              }
            }}
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
}

function useChats() {
  return useQuery({
    queryKey: ["chats"],
    queryFn: () =>
      telegram
        .getChats()
        .then((chats) => chats.chatIDs)
        .then((chatIDs) =>
          Promise.all(chatIDs.map((chatId) => telegram.getChat(chatId))),
        ),
  });
}

function useMessages(chatId: number, limit: number = 10) {
  return useQuery({
    queryKey: ["messages", chatId, limit],
    queryFn: () =>
      telegram
        .getMessages({ chatId, limit })
        .then((messages) => messages.reverse()),
  });
}
