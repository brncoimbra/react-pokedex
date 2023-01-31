import { FC } from "react";

import * as Atom from "./atoms";
import { MdCatchingPokemon } from "react-icons/md";

export interface ILoading {
  isLoading: boolean;
  loadingText: string;
}

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
