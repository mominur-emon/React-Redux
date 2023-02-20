import React, { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    if (name.length < 2) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        style={{ backgroundColor: validInput ? "green" : "red" }}
      />
    </div>
  );
}
