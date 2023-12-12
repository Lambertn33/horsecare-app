import { FC, ReactNode } from "react";
import { Button } from "flowbite-react";

interface AppButtonProps {
  children: ReactNode;
  color?: string;
  additionalProps?: object;
  type: "submit";
}

export const AppButton: FC<AppButtonProps> = ({
  children,
  color,
  additionalProps,
  type,
}) => {
  return (
    <Button color={color} type={type} {...additionalProps}>
      {children}
    </Button>
  );
};
