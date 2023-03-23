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
  document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    `
    <article>
    <img src="${pokemon.image}" alt""/>
    <h1>${pokemon.name}</h1>
    <h2>${pokemon.category}</h2>
    <p>Type: ${pokemon.type}</p>
    <p>Weaknesses: ${pokemon.weaknesses}</p>
    </article>
    `
  );
}
