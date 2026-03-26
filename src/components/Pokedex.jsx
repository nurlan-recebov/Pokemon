import Pokecard from "./Pokecard";

function Pokedex({ pokemon, isWinner, exp }) {
  return (
    <div className="pokedex">
      <h2 style={{ color: isWinner ? "green" : "red" }}>
        {isWinner ? "Winner" : "Lose"}
      </h2>
      <h3>{exp}</h3>

      <div className="cards">
        {pokemon.map((p) => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;