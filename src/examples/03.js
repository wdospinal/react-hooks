import React, { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("Hi there, how are you?");
  if (message === "Hi there, how are you?") {
    setMessage("Hello, again");
  }
  return <h2>{message}</h2>;
};

export default App;
