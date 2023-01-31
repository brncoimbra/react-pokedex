import { FC } from "react";

// icons
import { MdCatchingPokemon } from "react-icons/md";

// components
import * as Atom from "./atoms";

// types
import type { ILoading } from "./types";

const Loading: FC<ILoading> = ({ isLoading, loadingText }) => {
  if (!isLoading) return null;

  return (
    <Atom.LoadingContainer
      align='center'
      justify='center'
      direction='row'
      gap='xxs'
    >
      <Atom.PokemonIcon>
        <MdCatchingPokemon size='25' />
      </Atom.PokemonIcon>
      {loadingText}
    </Atom.LoadingContainer>
  );
};

export default Loading;
