import "../styles.css";
import { useEffect, useState } from "react";

const Character = ({ character }) => {
  return (
    <div class="card">
      <section class="imagen">
        <img src={character.image} alt="Cornvelious Daniel" />
      </section>
      <section class="content">
        <h1>{character.name}</h1>
        <section class="last">
          <h2 class="text-gray">Last known location:</h2>
          <h2 class="text-gray">{character?.location?.name}</h2>
        </section>
      </section>
    </div>
  );
};

const Characters = (props) => {
  const characters = props.characters;
  return characters.map((character) => <Character character={character} />);
};

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [newCharacters, setNewCharacters] = useState();
  const [id, setId] = useState([{}, {}, {}]);

  useEffect(() => {
    const fetchUsers = () => {
      return (
        fetch("https://rickandmortyapi.com/api/character/", { mode: "cors" })
          // We get the API response and receive data in JSON format
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setCharacters(data.results);
          })
          .catch((error) => console.error(error))
      );
    };
    fetchUsers();
  }, []);

  const searchCharacter = (name) => {
    return (
      fetch(`https://rickandmortyapi.com/api/character/?name=${name}`, { mode: "cors" })
        // We get the API response and receive data in JSON format
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setNewCharacters(data.results);
        })
        .catch((error) => console.error(error))
    );
  };

  return (
    <div>
      <h1 class="title">The Rick and Morty API</h1>
      <div>
        <input type="text" onChange={(event) => setId(event.target.value)} />
        <button onClick={() => searchCharacter(id)}>Buscar</button>
      </div>
      {newCharacters && <div>
        <Characters characters={newCharacters} />
      </div>}
      <div class="characters">
        <Characters characters={characters} />
      </div>
    </div>
  );
};

export default App;
