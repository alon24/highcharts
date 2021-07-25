import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useChartContext } from "../context/context";
import { baseConfigs } from "./baseConfigs/baseConfigs";

export const Chart = () => {
    const { chart } = useChartContext();
    const { chartType, chartData, overrideConfig } = chart;
    const baseConfig = baseConfigs(chartData)[chartType];
    const chartConfig = {
        ...baseConfig,
        ...overrideConfig,
    };

    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={chartConfig} />
        </>
    );
};
