import { useState } from "react";
import Pokedex from "./components/Pokedex";
import pokemonData from "./pokemonData";

function App() {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  const startGame = () => {
    let poke = [...pokemonData];
    let t1 = [];
    let t2 = [...poke];

    while (t1.length < poke.length / 2) {
      let rand = Math.floor(Math.random() * t2.length);
      t1.push(t2.splice(rand, 1)[0]);
    }

    setTeam1(t1);
    setTeam2(t2);
  };

  const exp1 = team1.reduce((acc, p) => acc + p.base_experience, 0);
  const exp2 = team2.reduce((acc, p) => acc + p.base_experience, 0);

  return (
    <div>
      <h1>Pokedex</h1>
      <button onClick={startGame}>Start Game</button>

      <Pokedex pokemon={team1} exp={exp1} isWinner={exp1 > exp2} />
      <h2>VS</h2>
      <Pokedex pokemon={team2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
}

export default App;