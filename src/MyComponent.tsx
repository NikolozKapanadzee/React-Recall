import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function handleQuantity(event: React.ChangeEvent<HTMLInputElement>) {
    setQuantity(Number(event.target.value));
  }

  return (
    <>
      <div className="guja">
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input type="number" value={quantity} onChange={handleQuantity} />
        <p>Quantity: {quantity}</p>
      </div>
    </>
  );
}

export default MyComponent;
