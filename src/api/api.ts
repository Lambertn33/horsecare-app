import { supabase } from "@/helpers/supabase";
import {
  NewAppointmentDataInterface,
  HostlerInterface,
  BookingInterface,
} from "@/interfaces";

const GET_ALL = async <T>(
  model: string,
  query: string
): Promise<T[] | null> => {
  const { data } = await supabase.from(model).select(query);
  return data as T[] | null;
};

const GET_ONE = async <T>(
  model: string,
  query: string,
  id: string
): Promise<T | null> => {
  const { data } = await supabase
    .from(model)
    .select(query)
    .eq("id", id)
    .single();
  return data as T | null;
};

export const POST = async (submittedData: NewAppointmentDataInterface) => {
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
  await GET_ALL<HostlerInterface>(
    "horsecares",
    `id, names, description, services(id, name)`
  );

export const getSingleHostler = async (id: string) =>
  await GET_ONE<HostlerInterface>(
    "horsecares",
    `id, names, description, services(id, name, price)`,
    id
  );

export const getAllBookings = async () =>
  await GET_ALL<BookingInterface>(
    "bookings",
    `id, names, email, date, services(name, price), horsecares(names)`
  );

export const searchHostler = async (names: string) => {
  const { data } = await supabase
    .from("horsecares")
    .select(`id, names, description, services(id, name)`)
    .ilike("names", `%${names}%`);
  return { data };
};
