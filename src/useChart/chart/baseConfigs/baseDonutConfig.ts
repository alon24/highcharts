import { baseConfig } from "./baseConfig";
import { useChartContext } from "../../context/context";

export const baseDonutConfig = (chartData) => {
    const { chart } = useChartContext();
    const { is3D } = chart;
    return {
        ...baseConfig,
        chart: {
            type: "pie",
            options3d: {
                enabled: is3D,
                alpha: 65,
                beta: 30,
            },
        },
        series: [
            {
                innerSize: "65%",
                showInLegend: true,
                dataLabels: {
                    enabled: false,
                },
                data: chartData,
            },
        ],
    };
};
