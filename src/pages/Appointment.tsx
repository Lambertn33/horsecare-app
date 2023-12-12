import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HostlerParams, HostlerInterface } from "@/interfaces";
import { getSingleHostler } from "@/api/api";
import { AppSpinner } from "@/components";
import { Button, Card, Label, TextInput } from "flowbite-react";

export const Appointment = () => {
  const { hostlerId } = useParams<HostlerParams>();
  const [hostler, setHostler] = useState<HostlerInterface | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput
                      id="email1"
                      type="email"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                  </div>
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
