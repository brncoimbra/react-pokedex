import styled from "styled-components";
import { FlexBox } from "../Flexbox";

export const PokedexView = styled(FlexBox)`
  margin-bottom: ${(props) => props.theme.spacing.sm};
  margin-top: ${(props) => props.theme.spacing.sm};
  background: ${(props) => props.theme.colors.neutral[1]};
  padding: ${(props) => props.theme.spacing.xs};
  border-radius: ${(props) => props.theme.spacing.xxxs};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3x, rgba(0, 0, 0, 0.24) 0px 1px 2x;
`;
