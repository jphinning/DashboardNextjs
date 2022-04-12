import { Box, Flex } from "@chakra-ui/react";
import React, { memo } from "react";
import { ChartData } from "../../services/indicatorData";
import { MultipleAxis } from "../Charts/MultipleAxis";
import { PercentageChart } from "../Charts/PercentageChart";

interface ChartLineProps {}

const ChartLine: React.FC<ChartLineProps> = ({}) => {
  const fetchedData = new ChartData();

  const xAxis = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  // const t1 = performance.now();
  const yAxisAloChart = fetchedData.getParamSumPerHour("alo", "hora");
  const yAxisCPCChart = fetchedData.getParamSumPerHour("cpc", "hora");
  const yAxisCPCApvChart = fetchedData.getParamSumPerHour("cpca", "hora");
  const yAxisPPChart = fetchedData.getParamSumPerHour("pp", "hora");
  // const t2 = performance.now();

  // console.log(`Performace: ${t2 - t1} ms`);

  return (
    <Flex mt="10" gap={3}>
      <Box boxShadow="md" borderRadius="md" w="30%">
        <PercentageChart
          PPSum={yAxisPPChart.arraySum}
          CPCAprSum={yAxisCPCApvChart.arraySum}
        />
      </Box>
      <Box boxShadow="md" borderRadius="md" mr="3" w="70%">
        <MultipleAxis
          aloAxis={yAxisAloChart}
          xAxis={xAxis}
          cpcAxis={yAxisCPCChart}
          cpcApvAxis={yAxisCPCApvChart}
          ppAxis={yAxisPPChart}
        />
      </Box>
    </Flex>
  );
};

export default memo(ChartLine);
