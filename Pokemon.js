"use strict";

window.addEventListener("load", start);

async function start() {
  console.log("start kører");

  const pokemons = await getPokemon(
    "https://cederdorff.github.io/dat-js/05-data/pokemons.json"
  );

  pokemons.forEach(showPokemon);
}

async function getPokemon(url) {
  const response = await fetch(url);
  console.log(response);

  const data = await response.json();
  console.log(data);
  return data;
}

function showPokemon(pokemon) {
  /* --- Hvis type og weaknesses skal vises som symboler ----
  
  document.querySelector("#pokemons").insertAdjacentHTML(
    "beforeend",
    `
    <article class="grid-item">
    <img src="${pokemon.image}" alt""/>
    <h2>${pokemon.name}</h2>
    <h3>Category: ${pokemon.category}</h3>
    <p>Type: <img id="typeimages" src="images/water.png" alt""/>   <img id="typeimages" src="images/psychic.png" alt""/></p> 
    <p>Weaknesses: <img id="typeimages" src="images/ghost.png" alt""/> <img id="typeimages" src="images/dark.png" alt""/> <img id="typeimages" src="images/grass.png" alt""/> <img id="typeimages" src="images/electric.png" alt""/> <img id="typeimages" src="images/bug.png" alt""/></p>
    </article>
    );
    `*/
  document.querySelector("#pokemons").insertAdjacentHTML(
    "beforeend",
    `
    <article class="grid-item">
    <img src="${pokemon.image}" alt""/>
    <h2>${pokemon.name}</h2>
    <h3>Type: ${pokemon.type}</h3>
    <p>Ability: ${pokemon.ability}</p> 
    <p>Weaknesses: ${pokemon.weaknesses}</p>
    </article>
    `
  );
  document
    .querySelector("#pokemons article:last-child")
    .addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    console.log(pokemon);

    document.querySelector("#dialog-name").textContent = pokemon.name;
    document.querySelector("#dialog-type").textContent =
      "Type: " + pokemon.type;
    document.querySelector("#dialog-subtype").textContent =
      "Subtype: " + pokemon.subtype;
    document.querySelector("#dialog-footprint").textContent =
      "Footprint: " + pokemon.footprint;
    document.querySelector("#dialog-description").textContent =
      pokemon.description;
    document.querySelector("#dialog-weaknesses").textContent =
      "Weaknesses: " + pokemon.weaknesses;
    document.querySelector("#dialog-ability").textContent =
      "Abilities: " + pokemon.ability;
    document.querySelector("#dialog-height").textContent =
      "Height: " + pokemon.height + " cm.";
    document.querySelector("#dialog-weight").textContent =
      "Weight: " + pokemon.weight + " g.";
    document.querySelector("#dialog-dexindex").textContent =
      "Dexindex: " + pokemon.dexindex;
    document.querySelector("#dialog-generation").textContent =
      "Generation: " + pokemon.generation;
    document.querySelector("#dialog-spilversion").textContent =
      "Spilversion: " + pokemon.spilversion;
    document.querySelector("#dialog-gender").textContent =
      "Gender: " + pokemon.gender;

    let canEvolve = generateData(pokemon);
    document.querySelector("#dialog-canEvolve").textContent = canEvolve;

    document.querySelector("#dialog-statsHP").textContent =
      "Health Points: " + pokemon.statsHP;
    document.querySelector("#dialog-statsAttack").textContent =
      "Attack: " + pokemon.statsAttack;
    document.querySelector("#dialog-statsDefence").textContent =
      "Defence: " + pokemon.statsDefence;
    document.querySelector("#dialog-statsSpecialAttack").textContent =
      "Special Attack: " + pokemon.statsSpecialAttack;
    document.querySelector("#dialog-statsSpecialDefence").textContent =
      "Special Defence: " + pokemon.statsSpecialDefence;
    document.querySelector("#dialog-statsSpeed").textContent =
      "Speed: " + pokemon.statsSpeed;
    document.querySelector("#dialog-image").src = pokemon.image;

    document.querySelector("#pokemonDialog").showModal();
  }
}

function generateData(pokemon) {
  let canEvolve = "";
  if (pokemon.canEvolve === true) {
    canEvolve = `Evolutions: ${pokemon.name} can evolve.`;
  } else if (pokemon.canEvolve === false) {
    canEvolve = `Evolution: ${pokemon.name} has no evolutions`;
  }

  return canEvolve;
}
