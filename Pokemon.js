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

    let showType = generateSymbols(pokemon);
    document.querySelector("#dialog-type").innerHTML = showType;

    let removeFalse = removeFalseValues(pokemon);
    document.querySelector("#dialog-subtype").textContent = removeFalse;

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

function generateSymbols(pokemon) {
  let showType = "";
  if (pokemon.type === "Electric") {
    showType = `Type: <img id="typeimages" src="images/electric.png" alt""/> `;
  } else if (pokemon.type === "Fire" || pokemon.type === "fire") {
    showType = `Type: <img id="typeimages" src="images/fire.png" alt""/> `;
  } else if (pokemon.type === "Fire, Fighting") {
    showType = `Type: <img id="typeimages" src="images/fire.png" alt""/><img id="typeimages" src="images/fighting.png" alt""/> `;
  } else if (pokemon.type === "Normal" || pokemon.type === "normal") {
    showType = `Type: <img id="typeimages" src="images/normal.png" alt""/> `;
  } else if (pokemon.type === "Water") {
    showType = `Type: <img id="typeimages" src="images/water.png" alt""/> `;
  } else if (pokemon.type === "Fairy") {
    showType = `Type: <img id="typeimages" src="images/fairy.png" alt""/> `;
  } else if (pokemon.type === "Fighting") {
    showType = `Type: <img id="typeimages" src="images/fighting.png" alt""/> `;
  } else if (pokemon.type === "Bug/Flying") {
    showType = `Type: <img id="typeimages" src="images/Bug.png" alt""/><img id="typeimages" src="images/flying.png" alt""/> `;
  } else if (pokemon.type === "flying") {
    showType = `Type: <img id="typeimages" src="images/flying.png" alt""/> `;
  } else if (pokemon.type === "Grass, Psychic") {
    showType = `Type: <img id="typeimages" src="images/grass.png" alt""/><img id="typeimages" src="images/psychic.png" alt""/> `;
  } else if (pokemon.type === "Psychic" || pokemon.type === "Psychich") {
    showType = `Type: <img id="typeimages" src="images/psychic.png" alt""/> `;
  } else if (pokemon.type === "Dark") {
    showType = `Type: <img id="typeimages" src="images/dark.png" alt""/> `;
  } else if (pokemon.type === "Ghost, Grass") {
    showType = `Type: <img id="typeimages" src="images/ghost.png" alt""/><img id="typeimages" src="images/grass.png" alt""/> `;
  } else if (pokemon.type === "Ground") {
    showType = `Type: <img id="typeimages" src="images/ground.png" alt""/> `;
  } else if (pokemon.type === "Water + Psychic") {
    showType = `Type: <img id="typeimages" src="images/water.png" alt""/><img id="typeimages" src="images/psychic.png" alt""/> `;
  } else if (pokemon.type === "Ghost, Poison") {
    showType = `Type: <img id="typeimages" src="images/ghost.png" alt""/><img id="typeimages" src="images/poison.png" alt""/> `;
  } else if (pokemon.type === "Water, ground") {
    showType = `Type: <img id="typeimages" src="images/water.png" alt""/><img id="typeimages" src="images/ground.png" alt""/> `;
  } else if (pokemon.type === "Electric, flying") {
    showType = `Type: <img id="typeimages" src="images/electric.png" alt""/><img id="typeimages" src="images/flying.png" alt""/> `;
  } else if (pokemon.type === "Sun") {
    showType = `Type: <img id="typeimages" src="images/sun.png" alt""/> `;
  } else if (pokemon.type === "Grass, Poison") {
    showType = `Type: <img id="typeimages" src="images/grass.png" alt""/><img id="typeimages" src="images/poison.png" alt""/> `;
  } else if (pokemon.type === "water, ice") {
    showType = `Type: <img id="typeimages" src="images/water.png" alt""/><img id="typeimages" src="images/ice.png" alt""/> `;
  } else {
    showType = `Type: ${pokemon.type}`;
  }

  return showType;
}

/* footprint
subtype
gender 
generation
*/

function removeFalseValues(pokemon) {
  let removeFalse = "";
  if (
    pokemon.subtype === null ||
    pokemon.subtype === undefined ||
    pokemon.subtybe === "" ||
    pokemon.subtybe === "undefined" ||
    pokemon.subtybe === "none" ||
    pokemon.subtybe === "None" ||
    pokemon.subtybe === "Undefined"
  ) {
    removeFalse = "";
  } else {
    removeFalse = "Subtype: " + pokemon.subtype;
  }
  return removeFalse;
}
