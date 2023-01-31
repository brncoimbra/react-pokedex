import { FC } from 'react';

// components
import { FlexBox } from "../Flexbox";
import * as Atom from "./atoms";

// types
import type { IInput } from './types';


const Input: FC<IInput> = ({ label, ...props }) => {
  return (
    <FlexBox align='flex-start' justify='center' direction='column' gap='xxs'>
      {label}
      <Atom.Input {...props} />
    </FlexBox>
  );
};

export default Input;
