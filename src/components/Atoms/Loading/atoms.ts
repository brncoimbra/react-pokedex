import styled from "styled-components";
import { FlexBox } from "../Flexbox";

export const LoadingContainer = styled(FlexBox)`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  padding: 10px;
  border-radius: 6px;
  font-size: 1em;
  font-weight: 600;
  max-width: 300px;
  margin-top: ${(props) => props.theme.spacing.xs};
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

export const PokemonIcon = styled.div`
  animation: pokeballRotate infinite 2000ms;

  @keyframes pokeballRotate {
    0% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(30deg);
    }
    50% {
      transform: rotate(-30deg);
    }
    60% {
      transform: rotate(30deg);
    }
    80% {
      transform: rotate(-30deg);
    }
    90% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(0deg);
    }
  } ;
`;
