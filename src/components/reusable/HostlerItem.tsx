import { FC } from "react";
import { Badge } from "flowbite-react";

import { AppButton, AppCard } from "..";
import { HostlerInterface } from "@/interfaces";
import img from "@/assets/horsekeeper.png";

interface HostlerItemProps {
  hostler: HostlerInterface;
}

export const HostlerItem: FC<HostlerItemProps> = ({ hostler }) => {
  return (
    <AppCard imgSrc={img}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {hostler.names}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {hostler.description}
      </p>
      <div className="flex gap-2">
        {hostler.services.map((service) => (
          <Badge key={service.id} color="success">
            {service.name}
          </Badge>
        ))}
      </div>
      <AppButton>Book Now</AppButton>
    </AppCard>
  );
};
