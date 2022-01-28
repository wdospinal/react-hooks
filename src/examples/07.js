import { useState } from "react";

const EssayForm = () => {
  const [texto, setTexto] = useState("");

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("An essay was submitted: " + texto);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Essay:
        <textarea value={texto} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

const App = () => {
  return <EssayForm />;
};
export default App;
