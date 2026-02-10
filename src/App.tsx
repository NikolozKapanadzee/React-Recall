import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const handleChange = (inputIdentifier: any, newValue: any) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: newValue,
      };
    });
  };
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      <Results userInput={userInput} />
    </div>
  );
}

export default App;
