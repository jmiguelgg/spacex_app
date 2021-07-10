import { useQuery } from "@apollo/client";
import { GET_LAUCHES, LaunchesPastData, LaunchesPastVars } from "../querys/launches";

interface LaunchesPastServiceProps {
  limit: number;
};

export interface ErrorHandler {
  status: number;
  message: string;
}

const useLauchesPastService = ({limit}: LaunchesPastServiceProps) => {
  const { loading, error, data } = useQuery<LaunchesPastData, LaunchesPastVars>(GET_LAUCHES, {
    variables: { limit },
  });

  if (loading) return null;
  if (error) {
    console.error(error);
    return null;
  }
  return data?.launchesPast;
};

export default useLauchesPastService;
