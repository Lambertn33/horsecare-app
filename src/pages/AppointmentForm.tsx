import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Swal from "sweetalert2";

import {
  HostlerParamsInterface,
  HostlerInterface,
  AppointmentDataInterface,
  NewAppointmentDataInterface,
} from "@/interfaces";

import { getSingleHostler, POST } from "@/api/api";

import {
  AppButton,
  AppCard,
  AppInput,
  AppSelect,
  AppSpinner,
} from "@/components";

export const AppointmentForm = () => {
  const { hostlerId } = useParams<HostlerParamsInterface>();
  const history = useHistory();

  const [hostler, setHostler] = useState<HostlerInterface | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [appointmentData, setAppointmentData] =
    useState<AppointmentDataInterface>({
      names: "",
      email: "",
      date: new Date(),
      serviceId: "",
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

  const clearForm = () => {
    setAppointmentData({
      names: "",
      email: "",
      date: new Date(),
      serviceId: "",
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newAppointment: NewAppointmentDataInterface = {
      date: appointmentData.date,
      email: appointmentData.email,
      names: appointmentData.names,
      serviceId: appointmentData.serviceId,
      userId: hostlerId,
    };
    const { data } = await POST(newAppointment);
    if (data) {
      clearForm();
      setIsSubmitting(false);
      Swal.fire({
        title: "Success!",
        text: "Appointment made successfully",
        icon: "success",
        confirmButtonText: "Ok",
        preConfirm: () => {
          history.push("/appointments");
        },
      });
    }
  };

  return (
    <div className="flex flex-col">
      <Link to="/hostlers">
        <IoIosArrowBack className="text-primary text-3xl font-bold" />
      </Link>
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
                <AppCard>
                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <AppInput
                      disabled={false}
                      label="Your names"
                      name="names"
                      type="text"
                      value={appointmentData.names}
                      onChange={handleChangeInput}
                      additionalProps={{
                        required: true,
                      }}
                    />
                    <AppInput
                      disabled={false}
                      label="Your email"
                      name="email"
                      type="email"
                      value={appointmentData.email}
                      onChange={handleChangeInput}
                      additionalProps={{
                        required: true,
                      }}
                    />
                    <AppInput
                      disabled={false}
                      label="Date"
                      name="date"
                      type="date"
                      additionalProps={{
                        min: new Date().toISOString().split("T")[0],
                        required: true,
                      }}
                      value={appointmentData.date}
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

                    <AppButton
                      type="submit"
                      additionalProps={{
                        disabled: isSubmitting,
                      }}
                    >
                      {isSubmitting ? "Please wait..." : "Submit"}
                    </AppButton>
                  </form>
                </AppCard>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};
