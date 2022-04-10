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
          offsetY: 40,
          startAngle: -90,
          endAngle: 90,
          hollow: {
            margin: 5,
            size: "50%",
          },
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 10, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              color: "#999",
              opacity: 1,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },

            value: {
              offsetY: -2,
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
        offsetY: 0,
        labels: {
          useSeriesColors: false,
        },
        onItemClick: {
          toggleDataSeries: false,
        },
        itemMargin: {
          horizontal: 5,
          vertical: 0,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
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
