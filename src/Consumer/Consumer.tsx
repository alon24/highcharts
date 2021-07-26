import { useChart } from "./../useChart/useChart";
import React from "react";
import { EChartType } from "./../useChart/chart/chartTypes";
import { IChartContextInitialValue } from "./../useChart/context/contextTypes";
import { mockData } from "./mockData/mockData";

export const Consumer = ({
    chartType = EChartType.DONUT,
    seriesCount = 5,
    threeDimensions,
    chartTitle,
    isFiltersAndActionItems,
}) => {
    const legendItems = [
        { label: "Series A", color: "#38618C" },
        { label: "Series B", color: "#41C8BB" },
        { label: "Series C", color: "#FF9A47" },
        { label: "Series D", color: "#E95F5F" },
        { label: "Series E", color: "#F9CF5A" },
    ].slice(0, seriesCount);
    const chartData = mockData[chartType].slice(0, seriesCount);
    //const LegendComponent = ({ legendItem }) => <h3>{legendItem.label}</h3>;
    const chartContextInitialValue: IChartContextInitialValue = {
        legends: { legendItems },
        chart: { chartData, chartType, threeDimensions },
        chartTitle,
    };
    const useChartArgs = {
        chartContextInitialValue,
    };

    const { ChartContextProvider, Legends, ChartTitle, Chart, filtersAndActionItems } = useChart(
        useChartArgs,
    );
    const { ExcelDownload, PngDownload, AddToDashboard } = filtersAndActionItems;
    const { isPng, isExcel, isDashboard } = isFiltersAndActionItems;
    return (
        <ChartContextProvider>
            <div style={{ width: "700px", height: "700px" }}>
                <ChartTitle>chart title</ChartTitle>
                <div style={{ display: "flex", margin: "10px 0px" }}>
                    <Legends />
                </div>
                <div style={{ display: "flex", gridColumnGap: "14px", justifyContent: "flex-end" }}>
                    {isExcel && <ExcelDownload />}
                    {isPng && <PngDownload />}
                    {isDashboard && <AddToDashboard />}
                </div>

                <Chart />
            </div>
        </ChartContextProvider>
    );
};

/*
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
*/
