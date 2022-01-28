// Manejar la data con funciones
const App = () => {
  const formatName = (user) => {
    return user.firstName + " " + user.lastName + " con edad: " + user.age;
  };

  const user = {
    firstName: "Wilson",
    lastName: "Ospina",
    age: 25
  };

  return <h1>Hello, {formatName(user)}!</h1>;
};

export default App;
