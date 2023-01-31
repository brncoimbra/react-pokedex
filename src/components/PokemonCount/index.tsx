import { FC } from "react";

import * as Atom from "./atoms";
import { MdCatchingPokemon } from "react-icons/md";

export interface IPokemonCount {
  count: number;
}

const PokemonCount: FC<IPokemonCount> = ({ count }) => {
  return (
    <Atom.PokemonCountContainer
      align='center'
      justify='flex-start'
      direction='row'
      gap='xxs'
      wrap='wrap'
    >
      <MdCatchingPokemon size='25' />
      {count} Pokemons
    </Atom.PokemonCountContainer>
  );
};

export default PokemonCount;
