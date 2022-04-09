import { Box } from "@chakra-ui/react";
import React from "react";
import { ChartLine } from "../Cards/ChartLine";
import { Title } from "../Title";
import { SortingCardsHour } from "./SortingCardsHour";

interface HourBodyProps {}

export const HourBody: React.FC<HourBodyProps> = ({}) => {
  return (
    <Box w="100%" mt="2vh">
      <Title title="Dashboard Hora" />
      <SortingCardsHour />
      <ChartLine />
    </Box>
  );
};
