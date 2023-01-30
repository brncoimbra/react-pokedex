import { FC } from "react";
import { TPokemonType } from "../../interface";
import { FlexBox } from "../Flexbox";
import * as Atom from "./atoms";

interface ICardProps {
  id: number;
  name: string;
  image: string;
  preview?: string;
  type: TPokemonType;
}

const Card: FC<ICardProps> = ({ id, image, name, preview, type }) => {
  return (
    <Atom.Container gap='xs' align='center' justify='center' direction='column'>
      <FlexBox align='center' justify='flex-end' direction='row'>
        <Atom.PokemonText type={type}>#{id}</Atom.PokemonText>
      </FlexBox>
      <Atom.PokemonSpot
        align='center'
        justify='center'
        direction='column'
        type={type}
      >
        <Atom.PokemonSprite src={image} alt='imagem-pokemon' />
      </Atom.PokemonSpot>
      <Atom.PokemonPreviewSection
        align='center'
        justify='space-between'
        direction='row'
      >
        <Atom.PokemonText type={type}>{name}</Atom.PokemonText>
        {preview && <img src={preview} alt='preview' />}
      </Atom.PokemonPreviewSection>
    </Atom.Container>
  );
};

export default Card;
