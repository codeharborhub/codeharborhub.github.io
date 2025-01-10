import React, { useState, useEffect } from "react";

const SessionStorageExample = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Load saved email from session storage on component mount
  useEffect(() => {
    const savedEmail = sessionStorage.getItem("email");
    if (savedEmail) {
      setMessage(`Your email is ${savedEmail}`);
    }
  }, []);

  const saveEmail = () => {
    sessionStorage.setItem("email", email);
    setMessage("Email saved!");
  };

  return (
    <div>
      <h1>Session Storage Example</h1>
      <p>Enter your email:</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={saveEmail}>Save Email</button>
      <p>{message}</p>
    </div>
  );
};

export default SessionStorageExample;
