import { useState } from "react";
import TapButton from "./components/TapButton";
import { EXAMPLES } from "../src/data";
function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  const handleClick = (selectedButton: any) => {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  };
  return (
    <>
      <TapButton click={() => handleClick("components")} label="Components" />
      <TapButton click={() => handleClick("jsx")} label="JSX" />
      <TapButton click={() => handleClick("props")} label="Props" />
      <TapButton click={() => handleClick("state")} label="State" />
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    </>
  );
}

export default App;
