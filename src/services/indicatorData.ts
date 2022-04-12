import {
  useFetchDataGroupedBy,
  IUserDataProps,
} from "../hooks/useFetchDataGroupedBy";
import { useFetchDataSum } from "../hooks/useFetchDataSum";

export class ChartData {
  public getParamSumPerHour(
    param: IUserDataProps["indicator"],
    sortBy: IUserDataProps["sortBy"]
  ) {
    // Return sum of array grouped by hour and the parameter sum
    const { dataGroupedBy } = useFetchDataGroupedBy({
      order: "ASC",
      indicator: param,
      sortBy: sortBy,
    });

    const { dataSum } = useFetchDataSum({ indicator: param });

    if (!dataGroupedBy || !dataSum) return { paramSumArray: [0], arraySum: 0 };

    const paramSumArray = dataGroupedBy.map((obj) => obj.sum);
    const arraySum = dataSum.map((obj) => obj.sum)[0];

    return { paramSumArray, arraySum };
  }

  public getParamSumPerRegion(param: IUserDataProps["indicator"]) {
    const { dataGroupedBy } = useFetchDataGroupedBy({
      order: "ASC",
      indicator: param,
      sortBy: "estado",
    });

    const { dataSum } = useFetchDataSum({ indicator: param });

    if (!dataGroupedBy || !dataSum)
      return {
        regions: [" "],
        percentageArray: [0],
        paramArrayPerRegion: [0],
      };

    const regions = dataGroupedBy
      .map((obj) => obj.estado)
      .filter((value) => value != null);
    const paramArrayPerRegion = dataGroupedBy.map((obj) => obj.sum);
    const arraySum = dataSum.map((obj) => obj.sum)[0];

    const percentageArray = dataGroupedBy.map(
      (obj) => (obj.sum / arraySum) * 100
    );

    return {
      regions,
      percentageArray,
      paramArrayPerRegion,
    };
  }

  public getConvertionArray() {
    const { dataGroupedBy: cpcaArray } = useFetchDataGroupedBy({
      order: "ASC",
      indicator: "cpca",
      sortBy: "estado",
    });

    const { dataGroupedBy: ppArray } = useFetchDataGroupedBy({
      order: "ASC",
      indicator: "pp",
      sortBy: "estado",
    });

    if (!ppArray || !cpcaArray) return { conversionArray: [0] };

    const conversionArray = ppArray.map((ppobj, index) =>
      Math.round((ppobj.sum / cpcaArray[index].sum) * 100)
    );

    return { conversionArray };
  }
}
