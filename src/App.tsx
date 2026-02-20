import { useRef, useState } from "react";

function App() {
  const enteredPlayerName = useRef<HTMLInputElement | null>(null);
  const [playerName, setPlayerName] = useState("Unknown Player");
  const handleClick = () => {
    if (enteredPlayerName.current) {
      setPlayerName(enteredPlayerName.current.value);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="bg-white p-6 rounded-xl shadow-md w-[320px]">
        <h1 className="text-xl font-semibold text-gray-800 text-center mb-5">
          {playerName ?? "Unknown Player"}
        </h1>

        <div className="flex flex-col gap-3">
          <input
            ref={enteredPlayerName}
            type="text"
            placeholder="Enter name"
            className="px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleClick}
            className="py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition cursor-pointer"
          >
            Set Name
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
