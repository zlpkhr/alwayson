export function Messenger() {
  return (
    <div className="flex h-screen font-sans">
      {/* Chats list */}
      <aside className="w-72 border-r border-gray-200 bg-gray-50 p-4">
        <h2 className="text-lg font-semibold">Chats</h2>
        <ul>
          <li className="py-2 border-b border-gray-100 cursor-pointer">Chat 1</li>
          <li className="py-2 border-b border-gray-100 cursor-pointer">Chat 2</li>
          <li className="py-2 border-b border-gray-100 cursor-pointer">Chat 3</li>
        </ul>
      </aside>
      {/* Chat screen */}
      <main className="flex-1 p-4 bg-white">
        <h2 className="text-lg font-semibold">Chat Screen</h2>
        <div className="h-[80vh] border border-gray-100 rounded p-4 overflow-y-auto bg-gray-100">
          <div className="mb-4">
            <strong>User:</strong> Hello!
          </div>
          <div className="mb-4">
            <strong>Bot:</strong> Hi there! How can I help you?
          </div>
        </div>
        <form className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 rounded border border-gray-300"
            disabled
          />
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-700 text-white cursor-pointer"
            disabled
          >
            Send
          </button>
        </form>
      </main>
    </div>
  );
}
