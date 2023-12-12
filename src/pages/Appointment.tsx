import { useEffect, useState, ChangeEvent } from "react";
import { useParams } from "react-router-dom";

import { HostlerParams, HostlerInterface, AppointmentData } from "@/interfaces";
import { getSingleHostler } from "@/api/api";
import { AppInput, AppSelect, AppSpinner } from "@/components";
import { Button, Card } from "flowbite-react";

export const Appointment = () => {
  const { hostlerId } = useParams<HostlerParams>();

  const [hostler, setHostler] = useState<HostlerInterface | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [appointmentData, setAppointmentData] = useState<AppointmentData>({
    names: "",
    email: "",
    date: new Date(),
    serviceId: null,
    userId: hostlerId,
  });

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAppointmentData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    const fetchHostler = async () => {
      setIsLoading(true);
      const data = await getSingleHostler(hostlerId);
      setHostler(data);
      setIsLoading(false);
    };
    fetchHostler();
  }, [hostlerId]);

  return (
    <section className="bg-white dark:bg-gray-900 h-screen flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        {isLoading ? (
          <AppSpinner />
        ) : (
          <>
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary">
                {hostler?.names}
              </h2>
              <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                Make an appointment with {hostler?.names}
              </p>
            </div>
            <div className="w-full">
              <Card className="max-w-sm mx-auto">
                <form className="flex flex-col gap-4">
                  <AppInput
                    disabled={false}
                    label="Your names"
                    name="names"
                    type="text"
                    value={appointmentData.names}
                    onChange={handleChangeInput}
                  />
                  <AppInput
                    disabled={false}
                    label="Your email"
                    name="email"
                    type="email"
                    value={appointmentData.email}
                    onChange={handleChangeInput}
                  />
                  <AppInput
                    disabled={false}
                    label="Date"
                    name="date"
                    type="date"
                    additionalProps={{
                      min: new Date().toISOString().split("T")[0],
                    }}
                    value={appointmentData.names}
                    onChange={handleChangeInput}
                  />

                  <AppInput
                    disabled={true}
                    label="Hostler names"
                    type="text"
                    value={hostler?.names}
                  />

                  <AppSelect
                    label="Select the service"
                    name="serviceId"
                    options={hostler?.services}
                    onChange={handleChangeInput}
                  />

                  <Button type="submit">Submit</Button>
                </form>
              </Card>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
