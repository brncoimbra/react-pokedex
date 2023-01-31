import { FC } from "react";
import { useRecoilState } from "recoil";

// icons
import { MdAutorenew } from "react-icons/md";

// components
import { PokedexView, Loading, FlexBox, Card, Button } from "../../";

// types
import type { ISinglePokemon } from "./types";

// recoil: hash
import { atomHashPokemon } from "./../../../store/hashs";

const SinglePokemon: FC<ISinglePokemon> = ({ error, loading, pokemon }) => {
  // recoil: states
  const [hashPokemon, setHashPokemon] = useRecoilState(atomHashPokemon);

  const retryGetPokemon = () => setHashPokemon(hashPokemon + 1);

  if ((!pokemon || !pokemon.id) && !loading) {
    return (
      <PokedexView align='center' justify='center' direction='column' gap='xxs'>
        <span>Nenhum pokemon encontrado...</span>
      </PokedexView>
    );
  }

  if (error) {
    return (
      <PokedexView align='center' justify='center' direction='column' gap='xxs'>
        <Button onClick={() => retryGetPokemon()}>
          <MdAutorenew size='20' />
          Tentar novamente
        </Button>
      </PokedexView>
    );
  }

  if (loading) {
    return (
      <PokedexView align='center' justify='center' direction='column' gap='xxs'>
        <Loading loadingText='Carregando pokemon...' isLoading={loading} />
      </PokedexView>
    );
  }

  return (
    <PokedexView align='center' justify='center' direction='column' gap='xxs'>
      <FlexBox
        align='center'
        justify='center'
        direction='row'
        gap='xxs'
        wrap='wrap'
      >
        <Card
          type={pokemon?.types?.[0]?.type?.name}
          id={pokemon?.id}
          preview={
            pokemon?.sprites?.versions?.["generation-v"]?.["black-white"]
              ?.animated?.front_default
          }
          image={
            pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.other?.["official-artwork"]?.front_default ||
            ""
          }
          name={pokemon?.name}
        />
      </FlexBox>
    </PokedexView>
  );
};

export default SinglePokemon;
