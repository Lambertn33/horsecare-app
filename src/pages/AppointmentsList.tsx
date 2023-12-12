import { useEffect, useState } from "react";
import { getAllBookings } from "@/api/api";

export const AppointmentsList = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHostlers = async () => {
      setIsLoading(true);
      const data = await getAllBookings();
      console.log(data);
      setIsLoading(false);
    };
    fetchHostlers();
  }, []);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary">
            Appointments
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Check All Appointments made
          </p>
          {isLoading && <p>Please wait...</p>}
        </div>
      </div>
    </section>
  );
};
