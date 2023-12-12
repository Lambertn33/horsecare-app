import { supabase } from "@/helpers/supabase";
import { NewAppointmentData, HostlerInterface } from "@/interfaces";

const GET_ALL = async (
  model: string,
  query: string
): Promise<HostlerInterface[] | null> => {
  const { data } = await supabase.from(model).select(query);
  return data as unknown as HostlerInterface[];
};

const GET_ONE = async (
  model: string,
  query: string,
  id: string
): Promise<HostlerInterface | null> => {
  const { data } = await supabase
    .from(model)
    .select(query)
    .eq("id", id)
    .single();
  return data as unknown as HostlerInterface;
};

export const POST = async (submittedData: NewAppointmentData) => {
  const { data, error } = await supabase
    .from("bookings")
    .insert([
      {
        names: submittedData.names,
        email: submittedData.email,
        service_id: parseInt(submittedData.serviceId),
        user_id: parseInt(submittedData.userId),
        date: new Date(submittedData.date),
      },
    ])
    .select();
  return { data, error };
};

export const getAllHostlers = async () =>
  await GET_ALL("horsecares", `id, names, description, services(id, name)`);

export const getSingleHostler = async (id: string) =>
  await GET_ONE(
    "horsecares",
    `id, names, description, services(id, name, price)`,
    id
  );
