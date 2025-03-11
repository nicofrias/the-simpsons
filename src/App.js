import { useState } from "react";
import CharacterContainer from "./components/CharacterContainer";
import Container from "./components/Container";
import Header from "./components/Header"
import Welcome from "./components/Welcome"

function App() {

  const [ characters, setCharacters ] = useState(null);

  const reqApi = async() => {
    const api = await fetch('https://apisimpsons.fly.dev/api/personajes?limit=50'); // Traer más personajes
    const data = await api.json();
    
    const randomCharacters = data.docs.sort(() => 0.5 - Math.random()).slice(0, 3);
    setCharacters(randomCharacters);
  };

  return (
    <Container>
      <Header/>
      {!characters ? (
        <Welcome reqApi={reqApi}/>
      ) : (
        <CharacterContainer characters={characters} reqApi={reqApi}/>
      )}
    </Container>
  );
}

export default App;
