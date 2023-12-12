import { AppButton, AppCard } from "..";
import { Badge } from "flowbite-react";
import img from "@/assets/horsekeeper.png";

export const HostlerItem = () => {
  return (
    <AppCard imgSrc={img}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Hostler Name
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Hostler Description
      </p>
      <div className="flex gap-2">
        <Badge color="success">Hostler service</Badge>
      </div>
      <AppButton>Book Now</AppButton>
    </AppCard>
  );
};
