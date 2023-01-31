import { FC } from "react";

// components
import { FlexBox } from "../Flexbox";
import * as Atom from "./atoms";

//types
import { IButton } from "./types";

const Button: FC<IButton> = ({ children, onClick, disabled }) => {
  return (
    <Atom.Button disabled={disabled} onClick={onClick}>
      <FlexBox align='center' justify='flex-start' direction='row' gap='xxxs'>
        {children}
      </FlexBox>
    </Atom.Button>
  );
};

export default Button;
