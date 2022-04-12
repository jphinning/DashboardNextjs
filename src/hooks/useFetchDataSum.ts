import useSWR from "swr";

import axiosHttp from "../config/axiosHttp";
import { useParamsContext } from "../context/ParamsContext";

interface IUserDataProps {
  indicator: "alo" | "cpc" | "cpca" | "pp";
}

export interface Idata {
  sum: number;
}

export function useFetchDataSum({ indicator }: IUserDataProps) {
  const { startDate, finalDate } = useParamsContext();

  const inicialDate = startDate.toISOString().split("T")[0];
  const lastDate = finalDate.toISOString().split("T")[0];

  const url = `api/v1/data/sum?initialDate=${inicialDate}&lastDate=${lastDate}&indicator=${indicator}`;

  const { data, error } = useSWR<Idata[], Error>(url, async (url) => {
    const response = await axiosHttp.get(url);

    return response.data;
  });

  const dataSum = data;

  return { dataSum, error, isLoading: !error && !dataSum };
}
