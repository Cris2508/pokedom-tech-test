import { pokemonArray } from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");

console.log(pokemonArray);

// in the paragraph "name" + " " + "#id" + " " + "is a" + " " + "types[0]" + " " + "&" + " " + "types[1]" + " " + "type pokemon."

const renderPokemon = (pokemonArray) => {
  let htmlString = "";

  pokemonArray.forEach((pokemon) => {
    htmlString += (
      <section>
        <h2>${pokemonArray.name}</h2>
        <p></p>
      </section>
    );
  });
};
