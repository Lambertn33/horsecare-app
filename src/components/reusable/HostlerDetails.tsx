import { FC } from "react";
import { Badge } from "flowbite-react";
import { HostlerInterface } from "@/interfaces";

interface HostlerDetailsProps {
  hostler: HostlerInterface;
}

export const HostlerDetails: FC<HostlerDetailsProps> = ({ hostler }) => {
  return (
    <section className="bg-white dark:bg-gray-900 my-auto">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {hostler?.names}
          </h2>
          <p className="mb-8 font-bold text-gray-500 sm:text-xl dark:text-gray-400">
            {hostler?.description}
          </p>
          <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus, nostrum voluptatibus rerum ut, necessitatibus
            laboriosam accusantium eaque, dolor excepturi reiciendis sapiente
            voluptatum deserunt. Possimus consequatur soluta itaque quos
            expedita dignissimos.
          </p>
          <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus, nostrum voluptatibus rerum ut, necessitatibus
            laboriosam accusantium eaque, dolor excepturi reiciendis sapiente
            voluptatum deserunt. Possimus consequatur soluta itaque quos
            expedita dignissimos.
          </p>
        </div>
        <div className="flex gap-2">
          {hostler?.services.map((service) => (
            <Badge key={service.id} color="success" size="md">
              {service.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
