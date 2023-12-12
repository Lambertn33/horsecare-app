import { Card } from "flowbite-react";
import { FC, ReactNode } from "react";

interface AppCardProps {
  children: ReactNode;
  imgSrc?: string;
}
export const AppCard: FC<AppCardProps> = ({ children, imgSrc }) => {
  return (
    <Card className="max-w-sm" imgSrc={imgSrc}>
      {children}
    </Card>
  );
};
