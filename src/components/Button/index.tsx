import { ButtonHTMLAttributes, FC } from "react";

import * as Atom from './atoms'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (e?: any) => void | any;
  textButton: string;
  disabled?: boolean;
}

const Button: FC<IButton> = ({ onClick, textButton, disabled }) => {
  return (
    <Atom.Button disabled={disabled} onClick={onClick}>
      {textButton}
    </Atom.Button>
  );
};

export default Button;
