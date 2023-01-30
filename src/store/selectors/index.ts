import { selector } from "recoil";

// api
import { requester } from "../../api/requester";
import { IPokemon, IPokemonFetch } from "../../interface";

// recoil: atoms
import {
  atomPokemonFetch,
  atomPokemonOffSet,
  atomPokemonSearch,
} from "../atoms";

import { atomHashPokemonsFetch, atomHashPokemonsList } from "../hashs";

export const selectorFetchPokemon = selector({
  key: "selectorFetchPokemon",
  get: async ({ get }) => {
    get(atomHashPokemonsFetch)
    const offSet = get(atomPokemonOffSet);

    const { data } = await requester({
      baseURL: "https://pokeapi.co/api/v2/",
    }).get(`pokemon?limit=10&offset=${offSet}`);

    return data;
  },
});

export const selectorGetPokemons = selector({
  key: "selectorGetPokemons",
  get: async ({ get }) => {
    get(atomHashPokemonsList)
    const pokemonFetch = get(atomPokemonFetch);

    if (pokemonFetch.length > 0) {
      const list = pokemonFetch.map((pokemon: IPokemonFetch) => pokemon.name);

      const result = list.map(async (pokemon) => {
        const { data } = await requester({
          baseURL: "https://pokeapi.co/api/v2",
        }).get(`/pokemon/${pokemon.toLowerCase().trim()}`);

        return data;
      });

      const pokemonList = Promise.all(result);

      return pokemonList;
    }
  },
});

export const selectorGetPokemon = selector<IPokemon>({
  key: "selectorGetPokemon",
  get: async ({ get }) => {
    const pokemon = get(atomPokemonSearch);

    if (pokemon) {
      const { data } = await requester({
        baseURL: "https://pokeapi.co/api/v2/",
      }).get(`pokemon/${pokemon.toLowerCase().trim()}`);

      return data;
    }
  },
});
