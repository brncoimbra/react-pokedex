import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { FlexBox } from "../Flexbox";

import * as Atom from "./atoms";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (e?: any) => void | any;
  disabled?: boolean;
  children?: ReactNode;
}

const Button: FC<IButton> = ({ children, onClick, disabled }) => {
  return (
    <Atom.Button disabled={disabled} onClick={onClick}>
      <FlexBox align='center' justify='flex-start' direction='row' gap="xxxs">
        {children}
      </FlexBox>
    </Atom.Button>
  );
};

export default Button;
