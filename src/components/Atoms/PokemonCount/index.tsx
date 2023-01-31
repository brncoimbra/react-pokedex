import { FC } from "react";

// icons
import { MdCatchingPokemon } from "react-icons/md";

// components
import * as Atom from "./atoms";

// types
import type { IPokemonCount } from "./types";

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
