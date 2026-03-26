function Pokecard({ name, type, exp, id }) {
  const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id
    .toString()
    .padStart(3, "0")}.png`;

  return (
    <div className="card">
      <h4>{name}</h4>
      <img src={imgSrc} alt={name} />
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
  
    </div>
  );
}

export default Pokecard;