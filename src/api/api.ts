import { supabase } from "@/helpers/supabase";
import { HostlerInterface } from "@/interfaces";

const GET_ALL = async (
  model: string,
  query?: string
): Promise<HostlerInterface[] | null> => {
  const { data } = await supabase.from(model).select(query);
  return data as unknown as HostlerInterface[];
};

export const getAllHostlers = async () =>
  await GET_ALL(
    "horsecares",
    `id, names, description, services(
        id,
        name
        )`
  );
