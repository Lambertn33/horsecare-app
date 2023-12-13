import { useEffect, useState, useCallback } from "react";
import { AppInput, AppSpinner, HostlerItem } from "@/components";
import { HostlerInterface } from "@/interfaces";
import { searchHostler } from "@/api/api";

export const Hostlers = () => {
  const [hostlers, setHostlers] = useState<HostlerInterface[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // search hostler
  const handleSearchHostler = useCallback(async () => {
    if (searchQuery.trim().length > 0) {
      setIsLoading(true);
      const searchData = await searchHostler(searchQuery);
      setHostlers(searchData.data);
      setIsLoading(false);
      setIsSearching(searchData.data?.length === 0);
    } else {
      setHostlers([]);
      setIsSearching(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    handleSearchHostler();
  }, [handleSearchHostler]);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-4">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary">
            Available hostlers
          </h2>
          <p className="font-light text-gray-500 lg:mb-4 sm:text-xl dark:text-gray-400">
            Explore the whole collection of our hostlers
          </p>
        </div>
        <div className="inline-flex w-full items-center justify-center mb-8 lg:mb-4">
          <AppInput
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            additionalProps={{
              placeholder: "Search a Hostler by names...",
              style: { width: "400px" },
            }}
            disabled={false}
          />
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full">
            <AppSpinner />
          </div>
        ) : hostlers && hostlers.length > 0 ? (
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
            {hostlers.map((hostler) => (
              <HostlerItem key={hostler.id} hostler={hostler} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-500 dark:text-gray-400">
            {isSearching ? "No hostlers found." : ""}
          </p>
        )}
      </div>
    </section>
  );
};
