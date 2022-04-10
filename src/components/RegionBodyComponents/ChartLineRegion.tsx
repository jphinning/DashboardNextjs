import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { memo } from "react";
import { useParamsContext } from "../../context/ParamsContext";
import { ChartData } from "../../services/indicatorData";
import { BarChart } from "../Charts/BarChart";
import { ParamPercentage } from "../Charts/ParamPercentage";

interface ChartLineRegionProps {}

const ChartLineRegion: React.FC<ChartLineRegionProps> = ({}) => {
  const { indicator } = useParamsContext();
  const fetchedData = new ChartData();

  const paramPerRegion = fetchedData.getParamSumPerRegion(indicator);
  const percentage = paramPerRegion.percentageArray;

  return (
    <Flex mt="10" gap={3}>
      <Box
        boxShadow="md"
        borderRadius="md"
        mr="3"
        w="30%"
        maxHeight="60vh"
        overflowY={"scroll"}
      >
        <Heading size="xs" mx={3}>
          Média por região
        </Heading>
        <ParamPercentage
          percentageArray={percentage}
          index={25}
          label="São Paulo"
          indicator={indicator.toUpperCase()}
          paramSumArray={paramPerRegion.paramArrayPerRegion}
        />
        <ParamPercentage
          percentageArray={percentage}
          index={17}
          label="Paraná"
          indicator={indicator.toUpperCase()}
          paramSumArray={paramPerRegion.paramArrayPerRegion}
        />
        <ParamPercentage
          percentageArray={percentage}
          index={10}
          label="Minas Gerais"
          indicator={indicator.toUpperCase()}
          paramSumArray={paramPerRegion.paramArrayPerRegion}
        />
      </Box>
      <Box
        boxShadow="md"
        borderRadius="md"
        w="50%"
        maxHeight="60vh"
        overflowY={"scroll"}
      >
        <BarChart
          xAxis={paramPerRegion.regions}
          conversionRate={paramPerRegion.conversionArray}
        />
      </Box>
    </Flex>
  );
};

export default memo(ChartLineRegion);
