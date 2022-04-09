import { useState, useEffect } from "react";

import axiosHttp from "../config/axiosHttp";
import { useParamsContext } from "../context/ParamsContext";

export interface IUseDataProps {
  limit: string;
  order: "ASC" | "DESC";
}

interface data {
  [k: string]: any;
}

export function useFetchData({ limit, order }: IUseDataProps) {
  const { startDate, finalDate, indicator } = useParamsContext();
  const [data, setData] = useState<data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosHttp.get(
          `indicators?limit=${limit}&order=${order}&initialDate=${
            startDate.toISOString().split("T")[0]
          }&lastDate=${finalDate.toISOString().split("T")[0]}`
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [startDate, finalDate, indicator]);

  return { data };
}
