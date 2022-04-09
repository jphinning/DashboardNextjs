import { Flex } from "@chakra-ui/react";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";

import { DateBox } from "./Cards/DateBox";
import { MenuBox } from "./Cards/MenuBox";
import { useParamsContext } from "../context/ParamsContext";

interface SortingParamsProps {}

export const SortingParams: React.FC<SortingParamsProps> = ({}) => {
  const { startDate, setStartDate, finalDate, setFinalDate } =
    useParamsContext();

  return (
    <Flex gap="3">
      <MenuBox title="Indicador" />
      <DateBox title="Data Inicial" date={startDate} setDate={setStartDate} />
      <DateBox title="Data Final" date={finalDate} setDate={setFinalDate} />
    </Flex>
  );
};
