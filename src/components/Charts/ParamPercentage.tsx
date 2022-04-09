import React from "react";

import { Props as ChartProps } from "react-apexcharts";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ParamPercentageProps {
  percentageArray: number[];
  index: number;
  label: string;
  paramSumArray: number[];
  indicator: string;
}

export const ParamPercentage: React.FC<ParamPercentageProps> = ({
  percentageArray,
  index,
  label,
  paramSumArray,
  indicator,
}) => {
  const percentage = percentageArray[index];
  const paramSum = paramSumArray[index];

  const state: ChartProps = {
    series: [percentage | 0],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
          },
        },
      },
      labels: [label, `${indicator}: ${paramSum}`],
      legend: {
        show: true,
        floating: true,
        fontSize: "12px",
        position: "right",
        offsetX: 0,
        offsetY: 0,
        labels: {
          useSeriesColors: false,
        },
      },
    },
  };

  return (
    <ApexCharts
      options={state.options}
      series={state.series}
      type="radialBar"
      height="200"
    />
  );
};
