import { useEffect, useState } from "react";
import { getAllBookings } from "@/api/api";
import { AppSpinner, AppointmentsTable } from "@/components";
import { BookingInterface } from "@/interfaces";

export const AppointmentsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookings, setBookings] = useState<BookingInterface[] | null>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      setIsLoading(true);
      const data = await getAllBookings();
      setBookings(data);
      setIsLoading(false);
    };
    fetchBookings();
  }, []);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-lg text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary">
            Appointments
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Check All Appointments made
          </p>
          {isLoading ? (
            <AppSpinner />
          ) : (
            <AppointmentsTable bookings={bookings!} />
          )}
        </div>
      </div>
    </section>
  );
};
