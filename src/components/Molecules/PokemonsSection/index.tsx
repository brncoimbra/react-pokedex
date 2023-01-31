import { FC } from "react";
import { useRecoilState } from "recoil";

// icons
import { MdAutorenew, MdAdd } from "react-icons/md";

// components
import {
  PokedexView,
  Loading,
  FlexBox,
  Card,
  Button,
  PokemonCount,
} from "../../";

// types
import type { IPokemonsSection } from "./types";

// recoil: atoms
import { atomPokemonOffSet } from "./../../../store/atoms/index";

const PokemonsSection: FC<IPokemonsSection> = ({
  disabledFetch,
  hasErrors,
  loading,
  pokemons,
  pokemonsCount,
  retryFetch,
}) => {
  // recoil: states
  const [pokemonsOffset, setPokemonsOffset] = useRecoilState(atomPokemonOffSet);

  return (
    <>
      <PokemonCount count={pokemonsCount || 0} />
      <PokedexView
        align='center'
        justify='center'
        direction='column'
        gap='xxs'
        wrap='wrap'
      >
        <FlexBox
          align='center'
          justify='center'
          direction='row'
          gap='xxs'
          wrap='wrap'
        >
          {pokemons?.map((pokemon) => (
            <Card
              key={pokemon.id}
              type={pokemon?.types[0]?.type?.name}
              id={pokemon.id}
              preview={
                pokemon?.sprites?.versions?.["generation-v"]?.["black-white"]
                  ?.animated?.front_default
              }
              image={
                pokemon?.sprites.other?.dream_world?.front_default ||
                pokemon?.sprites.other?.["official-artwork"]?.front_default ||
                ""
              }
              name={pokemon?.name}
            />
          ))}
          <Loading loadingText='Carregando Pokemons...' isLoading={loading} />
        </FlexBox>
      </PokedexView>
      <FlexBox
        align='center'
        justify='flex-start'
        direction='row'
        gap='xxs'
        wrap='wrap'
      >
        <Button
          disabled={disabledFetch}
          onClick={() => setPokemonsOffset(pokemonsOffset + 10)}
        >
          <MdAdd size='20' />
          Carregar mais
        </Button>
        {hasErrors && (
          <Button onClick={() => retryFetch()}>
            <MdAutorenew size='20' />
            Tentar novamente
          </Button>
        )}
      </FlexBox>
    </>
  );
};

export default PokemonsSection;
