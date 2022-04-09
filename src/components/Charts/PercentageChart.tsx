import React from "react";

import { Props as ChartProps } from "react-apexcharts";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface PercentageChartProps {
  PPSum: number;
  CPCAprSum: number;
}

export const PercentageChart: React.FC<PercentageChartProps> = ({
  PPSum,
  CPCAprSum,
}) => {
  const percentage = Math.floor((PPSum / CPCAprSum) * 100);

  const state: ChartProps = {
    series: [percentage | 0],
    options: {
      title: {
        text: "% Conversão em Promessa",
      },
      chart: {
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            size: "50%",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              fontSize: "30px",
            },
          },
        },
      },
      labels: [
        `Promessas: ${PPSum.toLocaleString("pt-br")}`,
        `CPC Apr: ${CPCAprSum.toLocaleString("pt-br")}`,
        `% Conversao: ${percentage}% `,
      ],
      legend: {
        show: true,
        floating: true,
        fontSize: "12px",
        position: "bottom",
        offsetX: 0,
        offsetY: -40,
        labels: {
          useSeriesColors: false,
        },
        onItemClick: {
          toggleDataSeries: false,
        },
      },
    },
  };

  return (
    <ApexCharts
      options={state.options}
      series={state.series}
      type="radialBar"
      height="400"
      // width="20vw"
    />
  );
};
