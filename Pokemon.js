"use strict";

window.addEventListener("load", start);

async function start() {
  console.log("start kører");
  const SlowBro = await getPokemon(
    "https://raw.githubusercontent.com/Elvasfar/Pokemon---dataapp/main/Slowbro.json"
  );
  console.log(SlowBro);

  showPokemon(SlowBro);
}

async function getPokemon(url) {
  const response = await fetch(url);
  console.log(response);

  const data = await response.json();
  console.log(data);
  return data;
}

function showPokemon(pokemon) {
  document.querySelector("#pokemons").insertAdjacentHTML(
    "beforeend",
    `
    <article class="grid-item">
    <img src="${pokemon.image}" alt""/>
    <h2>${pokemon.name}</h2>
    <h3>Category: ${pokemon.category}</h3>
    <p>Type: <img id="typeimages" src="images/water.png" alt""/>   <img id="typeimages" src="images/psychic.png" alt""/></p> 
    <p>Weaknesses: <img id="typeimages" src="images/bug.png" alt""/> <img id="typeimages" src="images/grass.png" alt""/> <img id="typeimages" src="images/dark.png" alt""/> <img id="typeimages" src="images/electric.png" alt""/> <img id="typeimages" src="images/ghost.png" alt""/></p>
    </article>
    `
  );
  document
    .querySelector("#pokemons article:last-child")
    .addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    console.log(pokemon);

    document.querySelector("#dialog-header").textContent = pokemon.name;
    document.querySelector("#dialog-second-header").textContent =
      "Category: " + pokemon.category;
    document.querySelector("#dialog-type").textContent =
      "Type: " + pokemon.type;
    document.querySelector("#dialog-weaknesses").textContent =
      "Weaknesses: " + pokemon.weaknesses;
    document.querySelector("#dialog-abilities").textContent =
      "Abilities: " + pokemon.abilities;
    document.querySelector("#dialog-height").textContent =
      "Height: " + pokemon.height;
    document.querySelector("#dialog-weight").textContent =
      "Weight: " + pokemon.weight;
    document.querySelector("#dialog-pokedexnr").textContent =
      "Pokedex Number: " + pokemon.pokedexnr;
    document.querySelector("#dialog-image").src = pokemon.image;

    document.querySelector("#pokemonDialog").showModal();
  }
}
