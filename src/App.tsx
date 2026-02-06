import TapButton from "./components/TapButton";

function App() {
  const handleClick = (selectedButton: any) => {
    console.log(selectedButton);
  };
  return (
    <>
      <TapButton click={() => handleClick("components")} label="Components" />
      <TapButton click={() => handleClick("jsx")} label="JSX" />
      <TapButton click={() => handleClick("props")} label="Props" />
      <TapButton click={() => handleClick("state")} label="State" />
      <h1>Dynami Content</h1>
    </>
  );
}

export default App;
