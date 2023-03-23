"use strict";

window.addEventListener("load", start);

async function start() {
  const SlowBro = await getPokemon("data/Slowbro.json");
  console.log(SlowBro);
}

async function getPokemon() {}

function showPokemon() {}
