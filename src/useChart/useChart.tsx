import React, { FunctionComponent } from "react";
import { Legends } from "./legends/Legends";
import { getChartContextProvider } from "./context/context";
import { IUseChart } from "./useChartTypes";
import { ChartTitle } from "./Title/ChartTitle";
import { Chart } from "./chart/Chart";

export const useChart: IUseChart = ({ chartContextInitialValue = {} }) => {
    return {
        Legends,
        ChartTitle,
        ChartContextProvider: getChartContextProvider(chartContextInitialValue),
        Chart,
    };
};
