import { Flex } from "@chakra-ui/react";
import React from "react";
import { useParamsContext } from "../../context/ParamsContext";
import { DateBox } from "../Cards/DateBox";
import "react-datepicker/dist/react-datepicker.css";

interface SortingCardsProps {}

export const SoringCards: React.FC<SortingCardsProps> = ({}) => {
  const { startDate, setStartDate, finalDate, setFinalDate } =
    useParamsContext();

  return (
    <Flex gap="3">
      <DateBox title="Data Inicial" date={startDate} setDate={setStartDate} />
      <DateBox title="Data Final" date={finalDate} setDate={setFinalDate} />
    </Flex>
  );
};
