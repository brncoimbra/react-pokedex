import { IPokemon } from "../../../interface";

export interface IPokemonsSection {
  pokemons: IPokemon[];
  pokemonsCount: number;
  loading: boolean;
  disabledFetch: boolean;
  hasErrors: boolean;
  retryFetch: () => any;
}
