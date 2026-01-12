import { useState } from "react";
import MyComponent from "./MyComponent";

function App() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((prev) => !prev);
  };
  return (
    <>
      <button onClick={handleClick}>click me</button>
      {clicked && <MyComponent />}
    </>
  );
}

export default App;
