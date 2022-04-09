import { useFetchData } from "../hooks/useFetchData";
// import { useParamsContext } from "../context/ParamsContext";

export class ChartData {
  public fetchedData;

  constructor() {
    const { data } = useFetchData({
      limit: "35000",
      order: "ASC",
      initialDate: 1,
      lastDate: 1,
    });

    this.fetchedData = data;
  }

  public getParamSumPerHour(hours: number[], param: string) {
    let paramSumArray: number[] = [];
    const receivedData = this.fetchedData;
    hours.forEach((hour) => {
      let paramSum = 0;

      receivedData.forEach((row) => {
        if (row.hora === hour) {
          paramSum += row[`${param}`];
        }
      });

      paramSumArray.push(paramSum);
    });

    const arraySum = paramSumArray.reduce((a, b) => a + b, 0);

    return { paramSumArray, arraySum };
  }
}
