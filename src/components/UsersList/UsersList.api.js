import { $api } from "../../api/api";
import { useQuery } from "@tanstack/react-query";

const getByUsers = async () => {
  const response = await $api.get("/users");
  return response.data;
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getByUsers(),
  });
};
