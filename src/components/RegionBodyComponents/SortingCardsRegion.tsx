import { Flex } from "@chakra-ui/react";
import React from "react";
import { useParamsContext } from "../../context/ParamsContext";
import { DateBox } from "../Cards/DateBox";
import { MenuBox } from "../Cards/MenuBox";
import "react-datepicker/dist/react-datepicker.css";

interface SortingCardsRegionProps {}

export const SortingCardsRegion: React.FC<SortingCardsRegionProps> = ({}) => {
  const {
    startDate,
    setStartDate,
    finalDate,
    setFinalDate,
    indicator,
    setIndicator,
  } = useParamsContext();

  return (
    <Flex gap="3">
      <MenuBox
        title="Indicador"
        indicator={indicator}
        setIndicator={setIndicator}
      />
      <DateBox title="Data Inicial" date={startDate} setDate={setStartDate} />
      <DateBox title="Data Final" date={finalDate} setDate={setFinalDate} />
    </Flex>
  );
};
