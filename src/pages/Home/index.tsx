import { useState, useEffect, useMemo, useCallback } from "react";
import {
  useRecoilState,
  useSetRecoilState,
  useRecoilValueLoadable,
} from "recoil";

// icons
import { MdCatchingPokemon } from "react-icons/md";

// components
import Card from "../../components/Card";
import { FlexBox, Container } from "../../components";
import { PokedexView } from "../../components/PokedexView";
import Button from "../../components/Button";
import Input from "../../components/Input";

// recoil: atoms
import {
  atomPokemonFetch,
  atomPokemonList,
  atomPokemonOffSet,
  atomPokemonSearch,
} from "../../store/atoms";

// recoil: selectors
import {
  selectorFetchPokemon,
  selectorGetPokemon,
  selectorGetPokemons,
} from "../../store/selectors";

// hashs
import { atomHashPokemonsFetch, atomHashPokemonsList } from "../../store/hashs";
import PokemonCount from "../../components/PokemonCount";

const HomePage = () => {
  // local: states
  const [searchPokemon, setSearchPokemon] = useState<string>("");

  // recoil: states
  const setPokemon = useSetRecoilState(atomPokemonSearch);
  const setFetchPokemons = useSetRecoilState(atomPokemonFetch);
  const [pokemonsOffset, setPokemonsOffset] = useRecoilState(atomPokemonOffSet);
  const [pokemonList, setPokemonList] = useRecoilState(atomPokemonList);
  const [hashFetchMorePokemons, setHashFetchMorePokemons] = useRecoilState(
    atomHashPokemonsFetch
  );
  const [hashPokemonsList, setHashPokemonsList] =
    useRecoilState(atomHashPokemonsList);

  // recoil: loadable
  const getLoadablePokemons = useRecoilValueLoadable(selectorGetPokemons);
  const getLoadablePokemon = useRecoilValueLoadable(selectorGetPokemon);
  const fetchLoadablePokemon = useRecoilValueLoadable(selectorFetchPokemon);

  // memo: states
  const disabledFetchMorePokemons = useMemo(() => {
    if (
      fetchLoadablePokemon.state === "hasError" ||
      fetchLoadablePokemon.state === "loading" ||
      getLoadablePokemons.state === "hasError" ||
      getLoadablePokemons.state === "loading"
    ) {
      return true;
    } else {
      return false;
    }
  }, [fetchLoadablePokemon.state, getLoadablePokemons.state]);

  const hasFetchPokemonError = useMemo(() => {
    if (
      fetchLoadablePokemon.state === "hasError" ||
      getLoadablePokemons.state === "hasError"
    ) {
      return true;
    } else {
      return false;
    }
  }, [fetchLoadablePokemon.state, getLoadablePokemons.state]);

  const retryFetchMorePokemons = useCallback(() => {
    if (fetchLoadablePokemon.state === "hasError") {
      setHashFetchMorePokemons(hashFetchMorePokemons + 1);
    }
    if (getLoadablePokemons.state === "hasError") {
      setHashPokemonsList(hashPokemonsList + 1);
    }
  }, [fetchLoadablePokemon.state, getLoadablePokemons.state]);

  useEffect(() => {
    if (
      fetchLoadablePokemon.state === "hasValue" &&
      fetchLoadablePokemon.contents !== undefined
    ) {
      setFetchPokemons(fetchLoadablePokemon.contents.results);
    }
  }, [fetchLoadablePokemon.state, fetchLoadablePokemon.contents]);

  useEffect(() => {
    if (
      getLoadablePokemons.state === "hasValue" &&
      getLoadablePokemons.contents !== undefined
    ) {
      if (pokemonList.length > 0) {
        const filteredList = getLoadablePokemons.contents.filter(
          (pokemon) => !pokemonList.find((item) => item.name === pokemon.name)
        );
        setPokemonList(pokemonList.concat(filteredList));
      } else {
        setPokemonList(getLoadablePokemons.contents);
      }
    }
  }, [getLoadablePokemons.state, getLoadablePokemons.contents]);

  return (
    <Container>
      <FlexBox align='flex-start' justify='center' direction='column' gap='xxs'>
        <FlexBox align='center' justify='flex-start' direction='row' gap='xxs'>
          <Input
            placeholder='Procurar por nome ou ID'
            type='text'
            onChange={(e) => setSearchPokemon(e.target.value)}
          />
          <Button
            onClick={() => setPokemon(searchPokemon)}
            textButton='Procurar'
          />
        </FlexBox>
        {getLoadablePokemon?.state === "loading" && <div>Loading...</div>}
        {getLoadablePokemon?.state === "hasValue" &&
          getLoadablePokemon?.contents !== undefined && (
            <Card
              type={getLoadablePokemon?.contents?.types[0]?.type?.name}
              id={getLoadablePokemon.contents.id}
              preview={
                getLoadablePokemon?.contents?.sprites?.versions?.[
                  "generation-v"
                ]?.["black-white"]?.animated?.front_default
              }
              image={
                getLoadablePokemon?.contents?.sprites.other?.dream_world
                  ?.front_default ||
                getLoadablePokemon?.contents?.sprites.other?.[
                  "official-artwork"
                ]?.front_default ||
                ""
              }
              name={getLoadablePokemon?.contents?.name}
            />
          )}
      </FlexBox>
      <PokemonCount count={fetchLoadablePokemon.contents.count || 0} />
      <PokedexView
        align='center'
        justify='center'
        direction='row'
        gap='xxs'
        wrap='wrap'
      >
        {pokemonList.map((pokemon) => (
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
      </PokedexView>
      <FlexBox align='flex-start' justify='center' direction='column' gap='xxs'>
        <Button
          disabled={disabledFetchMorePokemons}
          onClick={() => setPokemonsOffset(pokemonsOffset + 10)}
          textButton='Carregar mais'
        />
        {hasFetchPokemonError && (
          <Button
            onClick={() => retryFetchMorePokemons()}
            textButton='Tentar novamente'
          />
        )}
      </FlexBox>
    </Container>
  );
};

export default HomePage;
