import { FC } from "react";
// import { Badge } from "flowbite-react";

import { AppCard } from "..";
import { HostlerInterface } from "@/interfaces";
import img from "@/assets/horsekeeper.png";
import { Link } from "react-router-dom";

interface HostlerItemProps {
  hostler: HostlerInterface;
}

export const HostlerItem: FC<HostlerItemProps> = ({ hostler }) => {
  return (
    <AppCard imgSrc={img}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {hostler.names}
      </h5>
      <Link
        className="group flex items-center justify-center p-2 text-center font-medium relative text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 rounded-lg focus:ring-2"
        to={`/hostlers/${hostler.id}`}
      >
        View more
      </Link>
    </AppCard>
  );
};
