import React from "react";
import { Legends } from "./legends/Legends";
import { getChartContextProvider } from "./context/context";
import { IUseChart } from "./useChartTypes";
import { ChartTitle } from "./Title/ChartTitle";
import { Chart } from "./chart/Chart";
import { filtersAndActionItems } from "./filtersAndActionItems/filtersAndActionItems";

export const useChart: IUseChart = ({ chartContextInitialValue = {} }) => {
    return {
        Legends,
        ChartTitle,
        ChartContextProvider: getChartContextProvider(chartContextInitialValue),
        Chart,
        filtersAndActionItems,
    };
};
