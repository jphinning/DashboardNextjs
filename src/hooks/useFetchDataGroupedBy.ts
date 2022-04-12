import useSWR from "swr";

import axiosHttp from "../config/axiosHttp";
import { useParamsContext } from "../context/ParamsContext";

export interface IUserDataProps {
  order: "ASC" | "DESC";
  indicator: "alo" | "cpc" | "cpca" | "pp";
  sortBy: "hora" | "estado";
}

export interface Idata {
  estado: string;
  hora: number;
  sum: number;
}

export function useFetchDataGroupedBy({
  order,
  indicator,
  sortBy,
}: IUserDataProps) {
  const { startDate, finalDate } = useParamsContext();

  const inicialDate = startDate.toISOString().split("T")[0];
  const lastDate = finalDate.toISOString().split("T")[0];

  const url = `api/v1/data/groupBy?order=${order}&initialDate=${inicialDate}&lastDate=${lastDate}&indicator=${indicator}&sortBy=${sortBy}`;

  const { data, error } = useSWR<Idata[], Error>(url, async (url) => {
    const response = await axiosHttp.get(url);

    return response.data;
  });

  const dataGroupedBy = data;

  return { dataGroupedBy, error, isLoading: !error && !dataGroupedBy };
}
