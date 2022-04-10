import useSWR from "swr";

import axiosHttp from "../config/axiosHttp";
import { useParamsContext } from "../context/ParamsContext";

export interface IUseDataProps {
  limit: string;
  order: "ASC" | "DESC";
}

export interface Idata {
  [k: string]: any;
}

export function useFetchData({ limit, order }: IUseDataProps) {
  const { startDate, finalDate } = useParamsContext();

  const url = `indicators?limit=${limit}&order=${order}&initialDate=${
    startDate.toISOString().split("T")[0]
  }&lastDate=${finalDate.toISOString().split("T")[0]}`;

  const { data, error } = useSWR<Idata[], Error>(url, async (url) => {
    const response = await axiosHttp.get(url);

    return response.data;
  });

  return { data, error, isLoading: !error && !data };
}
