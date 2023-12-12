import { useEffect, useState } from "react";
import { AppInput, AppSpinner, HostlerItem } from "@/components";
import { HostlerInterface } from "@/interfaces";
import { getAllHostlers } from "@/api/api";

export const Hostlers = () => {
  const [hostlers, setHostlers] = useState<HostlerInterface[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchHostlers = async () => {
      setIsLoading(true);
      const data = await getAllHostlers();
      setHostlers(data);
      setIsLoading(false);
    };
    fetchHostlers();
  }, []);

  const filteredHostlers = hostlers?.filter((hostler) =>
    hostler.names.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary">
            Available hostlers
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of our hostlers
          </p>
        </div>
        <div className="inline-flex w-full items-center justify-center mb-8 lg:mb-16">
          <AppInput
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            additionalProps={{
              placeholder: "Search a Hostler by names...",
              style: { width: "300px" },
            }}
            disabled={false}
          />
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full">
            <AppSpinner />
          </div>
        ) : filteredHostlers && filteredHostlers.length > 0 ? (
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
            {filteredHostlers.map((hostler) => (
              <HostlerItem key={hostler.id} hostler={hostler} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-500 dark:text-gray-400">
            No hostlers found.
          </p>
        )}
      </div>
    </section>
  );
};
