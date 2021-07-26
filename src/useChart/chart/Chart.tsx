import Highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";
import HighchartsReact from "highcharts-react-official";
import { useChartContext } from "../context/context";
import { baseConfigs } from "./baseConfigs/baseConfigs";

highcharts3d(Highcharts);

export const Chart = () => {
    const { chart, legends } = useChartContext();
    const { chartType, chartData, overrideConfig } = chart;
    const { legendItems } = legends;
    const filteredChartData = chartData.filter((item, index) => {
        return legendItems[index].checked ?? true;
    });
    const baseConfig = baseConfigs(filteredChartData)[chartType];
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
