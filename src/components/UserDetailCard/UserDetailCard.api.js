import { useQuery } from "@tanstack/react-query";
import { $api } from "../../api/api";

const getByUserDetails = async (user) => {
  const response = await $api.get(`/users/${user}`);
  return response.data;
};

export const useUserDetails = (slug) => {
  return useQuery({
    queryKey: ["users", slug],
    queryFn: () => getByUserDetails(slug),
    enabled: !!slug,
  });
};
