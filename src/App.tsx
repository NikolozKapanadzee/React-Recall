import { useState } from "react";

function App() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(enteredEmail);
    console.log(enteredPassword);
  };
  const handleEmailChange = (e: any) => {
    setEnteredEmail(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setEnteredPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto space-y-3">
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Email</label>
        <input
          onChange={handleEmailChange}
          value={enteredEmail}
          type="email"
          placeholder="email"
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Password</label>
        <input
          onChange={handlePasswordChange}
          value={enteredPassword}
          type="password"
          placeholder="password"
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        />
      </div>

      <div className="flex items-center">
        <button
          type="submit"
          className="w-full bg-gray-200 rounded px-2 py-1 text-sm cursor-pointer"
        >
          Login
        </button>
        <button
          type="submit"
          className="w-full bg-gray-200 rounded px-2 py-1 text-sm cursor-pointer"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default App;
