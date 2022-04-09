import React from "react";

import { Props as ChartProps } from "react-apexcharts";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface BarChartProps {
  xAxis: string[];
  conversionRate: number[];
}

export const BarChart: React.FC<BarChartProps> = ({
  xAxis,
  conversionRate,
}) => {
  const state: ChartProps = {
    series: [
      {
        data: conversionRate,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 500,
      },
      plotOptions: {
        bar: {
          barHeight: "80%",
          distributed: false,
          horizontal: true,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val + "%";
        },
        offsetX: 0,
        dropShadow: {
          enabled: true,
        },
      },
      xaxis: {
        categories: xAxis,
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      title: {
        text: "Conversão por Estado",
        align: "center",
        floating: true,
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return "%";
            },
          },
        },
      },
    },
  };

  return (
    <ApexCharts
      options={state.options}
      series={state.series}
      type="bar"
      height="1000"
      // width="50%"
    />
  );
};
