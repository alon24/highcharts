import { useChart } from "./../useChart/useChart";
import React from "react";
import { EChartType } from "./../useChart/chart/chartTypes";
import { IChartContextInitialValue } from "./../useChart/context/contextTypes";
import { mockData } from "./mockData/mockData";

export const Consumer = () => {
    const legendItems = [{ label: "Series A" }, { label: "Series B" }];
    const chartType = EChartType.DONUT;
    const chartData = mockData[chartType];
    const LegendComponent = ({ legendItem }) => <h3>{legendItem.label}</h3>;
    const chartContextInitialValue: IChartContextInitialValue = {
        legends: { legendItems, LegendComponent },
        chart: { chartData, chartType },
    };
    const useChartArgs = {
        chartContextInitialValue,
    };

    const { ChartContextProvider, Legends, ChartTitle, Chart } = useChart(useChartArgs);
    return (
        <ChartContextProvider>
            <ChartTitle>chart title</ChartTitle>
            <Legends />
            <Chart />
        </ChartContextProvider>
    );
};

export const ConsumerB = () => {
    const legendItems = [{ label: "Series A" }, { label: "Series B" }];
    const chartType = EChartType.AREA;
    const chartData = mockData[chartType];
    const LegendComponent = ({ legendItem }) => <h3>{legendItem.label}</h3>;
    const chartContextInitialValue: IChartContextInitialValue = {
        legends: { legendItems, LegendComponent },
        chart: { chartData, chartType },
    };
    const useChartArgs = {
        chartContextInitialValue,
    };

    const { ChartContextProvider, Legends, ChartTitle, Chart } = useChart(useChartArgs);
    return (
        <ChartContextProvider>
            <ChartTitle>chart title</ChartTitle>
            <Legends />
            <Chart />
        </ChartContextProvider>
    );
};
/*
AKIA42MSNAK5RZFVF6HL

I50mUKhOc4wYj4PgsLjxyvbtQyJ8aqdjwaIfMqCX
 */
