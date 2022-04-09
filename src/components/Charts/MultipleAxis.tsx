import React from "react";

import { Props as ChartProps } from "react-apexcharts";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface MultipleAxisProps {
  xAxis: number[];
  aloAxis: { paramSumArray: number[]; arraySum: number };
  cpcAxis: { paramSumArray: number[]; arraySum: number };
  cpcApvAxis: { paramSumArray: number[]; arraySum: number };
  ppAxis: { paramSumArray: number[]; arraySum: number };
}

export const MultipleAxis: React.FC<MultipleAxisProps> = ({
  xAxis,
  aloAxis,
  cpcAxis,
  cpcApvAxis,
  ppAxis,
}) => {
  const state: ChartProps = {
    series: [
      {
        name: `ALO: ${aloAxis.arraySum.toLocaleString("pt-br")}`,
        type: "column",
        data: aloAxis.paramSumArray,
      },
      {
        name: `CPC: ${cpcAxis.arraySum.toLocaleString("pt-br")}`,
        type: "line",
        data: cpcAxis.paramSumArray,
      },
      {
        name: `CPC APR: ${cpcApvAxis.arraySum.toLocaleString("pt-br")}`,
        type: "line",
        data: cpcApvAxis.paramSumArray,
      },
      {
        name: `PP: ${ppAxis.arraySum.toLocaleString("pt-br")}`,
        type: "line",
        data: ppAxis.paramSumArray,
      },
    ],
    options: {
      chart: {
        width: "100%",
        height: 350,
        type: "line",
      },
      stroke: {
        width: [0, 4, 4, 4],
      },
      title: {
        text: "Produtividade",
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [5],
      },
      xaxis: {
        categories: xAxis,
      },
      yaxis: [
        { seriesName: "ALO" },
        {
          seriesName: `CPC: ${cpcAxis.arraySum.toLocaleString("pt-br")}`,
          opposite: true,
        },
        {
          seriesName: `CPC: ${cpcAxis.arraySum.toLocaleString("pt-br")}`,
          opposite: true,
          show: false,
        },
        {
          seriesName: `CPC: ${cpcAxis.arraySum.toLocaleString("pt-br")}`,
          opposite: true,
          show: false,
        },
      ],
    },
  };

  return (
    <ApexCharts
      options={state.options}
      series={state.series}
      type="line"
      height="350"
    />
  );
};
