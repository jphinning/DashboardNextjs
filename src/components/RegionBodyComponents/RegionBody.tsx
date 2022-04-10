import { Box } from "@chakra-ui/react";
import React from "react";
// import { ChartLine } from "../Cards/ChartLine";
import { Title } from "../Title";
import ChartLineRegion from "./ChartLineRegion";
import { SortingCardsRegion } from "./SortingCardsRegion";

interface RegionBodyProps {}

export const RegionBody: React.FC<RegionBodyProps> = ({}) => {
  return (
    <Box w="100%" mt="2vh">
      <Title title="Região" />
      <SortingCardsRegion />
      <ChartLineRegion />
    </Box>
  );
};
