import { useEffect, useState } from "react";

// Renderizado condicional
const UserGreeting = (props) => {
  return <h1>Welcome back!</h1>;
};

const GuestGreeting = (props) => {
  return <h1>Please sign up.</h1>;
};

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

const LoginButton = (props) => {
  return <button onClick={props.onClick}>Login</button>;
};

const LogoutButton = (props) => {
  return <button onClick={props.onClick}>Logout</button>;
};

const LoginControl = (props) => {
  const [isLoggedIn, setLogin] = useState(false);
  const [button, setButton] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isLoggedIn) {
      setButton(<LogoutButton onClick={() => setLogin(false)} />);
    } else {
      setButton(<LoginButton onClick={() => setLogin(true)} />);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count, isLoggedIn]);

  useEffect(() => {
    document.title = `Hola User`;
  }, []);

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {button}
    </div>
  );
};
const App = () => {
  return <LoginControl />;
};

export default App;
