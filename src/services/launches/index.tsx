import { useQuery } from "@apollo/client";
import { GET_LAUCHES, LaunchesPastData, LaunchesPastVars } from "../querys/launches";

interface LaunchesPastServiceProps {
  limit: number;
};

const useLauchesPastService = ({limit}: LaunchesPastServiceProps) => {
  const { loading, error, data } = useQuery<LaunchesPastData, LaunchesPastVars>(GET_LAUCHES, {
    variables: { limit },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  return data;
};

export default useLauchesPastService;
