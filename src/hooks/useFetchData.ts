import { useState, useEffect } from "react";

import axiosHttp from "../config/axiosHttp";

export interface IUseDataProps {
  limit: string;
  order: "ASC" | "DESC";
  initialDate: number;
  lastDate: number;
}

interface data {
  [k: string]: any;
}

export function useFetchData({
  limit,
  order,
  initialDate,
  lastDate,
}: IUseDataProps) {
  const [data, setData] = useState<data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosHttp.get(
          `indicators?limit=${limit}&order=${order}&initialDate=${initialDate}&lastDate=${lastDate}`
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return { data };
}
