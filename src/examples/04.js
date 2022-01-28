import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default App;
