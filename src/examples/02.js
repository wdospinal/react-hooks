// Manejo de la informacion con nuevos componentes
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

const App = () => {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Manuel" />
      <Welcome name="Carlos" />
    </div>
  );
};

export default App;
