import { useQuery } from "@apollo/client";
import { GET_LAUCHES, LaunchesPastData, LaunchesPastVars } from "./querys";

interface ILaunchesPastServiceProps {
  limit: number;
};

const useLauchesPastService = ({limit}: ILaunchesPastServiceProps) => {
  const { loading, error, data } = useQuery<LaunchesPastData, LaunchesPastVars>(GET_LAUCHES, {
    variables: { limit },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  return data;
};

export default useLauchesPastService;
