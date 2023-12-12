import { FC, ReactNode } from "react";
import { Button } from "flowbite-react";

interface AppButtonProps {
  children: ReactNode;
  color?: string;
}

export const AppButton: FC<AppButtonProps> = ({ children, color }) => {
  return <Button color={color}>{children}</Button>;
};
