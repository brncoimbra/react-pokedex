import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (e?: any) => void | any;
  disabled?: boolean;
  children?: ReactNode;
}
