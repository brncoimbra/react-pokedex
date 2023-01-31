import { TPokemonType } from "../../../interface";

export interface ICardProps {
  id: number;
  name: string;
  image: string;
  preview?: string;
  type: TPokemonType;
}