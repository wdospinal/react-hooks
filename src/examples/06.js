const Item = (props)=> {
  const number = props.number;
  return <li>{number}</li>
}

const NumberList = (props) => {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <Item number={number}/>);
  return <ul>{listItems}</ul>;
};

const numbers = [1,2,3,4,5];

const App = () => {
  return <NumberList numbers={numbers} />;
};

export default App;
