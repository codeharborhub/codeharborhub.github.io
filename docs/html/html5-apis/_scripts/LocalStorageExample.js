import React, { useState, useEffect } from "react";

const LocalStorageExample = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Load saved name from local storage on component mount
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setMessage(`Welcome back, ${savedName}!`);
    }
  }, []);

  const saveName = () => {
    localStorage.setItem("name", name);
    setMessage("Name saved!");
  };

  return (
    <div>
      <h1>Local Storage Example</h1>
      <p>Enter your name:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={saveName}>Save Name</button>
      <p>{message}</p>
    </div>
  );
};

export default LocalStorageExample;
