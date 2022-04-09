import { useFetchData } from "../hooks/useFetchData";

export class ChartData {
  public fetchedData;

  constructor() {
    const { data } = useFetchData({
      limit: "35000",
      order: "ASC",
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

  public getParamSumPerRegion(param: string) {
    const receivedData = this.fetchedData;

    let regions: string[] = [];
    let state: string;
    let paramArrayPerRegion: number[] = [];
    let conversionArray: number[] = [];

    receivedData.forEach((region) => {
      if (region.estado) {
        state = region.estado.toUpperCase();
      }

      if (region.estado && !regions.includes(state)) {
        regions.push(state);
      }
    });

    regions.forEach((region) => {
      let PPSum = 0;
      let CPCASum = 0;
      let paramSum = 0;

      receivedData.forEach((row) => {
        if (row.estado === region) {
          PPSum += row["pp"];
          CPCASum += row["cpca"];
          paramSum += row[`${param}`];
        }
      });

      paramArrayPerRegion.push(paramSum);
      conversionArray.push(Math.floor((PPSum / CPCASum) * 100));
    });

    const percentageArray = this.percentageCalc(paramArrayPerRegion);
    return { regions, conversionArray, percentageArray, paramArrayPerRegion };
  }

  private percentageCalc(valuesArray: number[]) {
    const arraySum: number = valuesArray.reduce((a, b) => a + b, 0);
    let percentageArray: number[] = [];

    valuesArray.forEach((value) => {
      const percentage = (value / arraySum) * 100;
      percentageArray.push(percentage);
    });

    return percentageArray;
  }
}
