import { Box } from "@chakra-ui/react";
import React from "react";
import { ChartLine } from "./Cards/ChartLine";
import { SortingParams } from "./SortingParams";
import { Title } from "./Title";

interface BodyProps {}

export const Body: React.FC<BodyProps> = ({}) => {
  return (
    <Box w="100%" mt="2vh">
      <Title title="Dashboard" />
      <SortingParams />
      <ChartLine />
    </Box>
  );
};
