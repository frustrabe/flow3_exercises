import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { ProblemEntity } from "./problemEntity";

const baseUrl = "http://localhost:3003";

export const useGetProblems = () => {
  const fetchProblems = async () => {
    return await axios.get(baseUrl + "/problems");
  };
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["problems"],
    queryFn: fetchProblems,
  });
  return { isLoading, isError, data: data?.data, error };
};

export const usePostProblem = () => {
  return useMutation({
    mutationFn: (newProblem: ProblemEntity) => {
      return axios.post(baseUrl + "/problems", newProblem);
    },
  });
};
