import { InputHTMLAttributes, FC } from "react";
import { FlexBox } from "../Flexbox";

import * as Atom from "./atoms";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: FC<IInput> = ({ label, ...props }) => {
  return (
    <FlexBox align='flex-start' justify='center' direction='column' gap='xxs'>
      {label}
      <Atom.Input {...props} />
    </FlexBox>
  );
};

export default Input;
