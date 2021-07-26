import { baseConfig } from "./baseConfig";
import { useChartContext } from "../../context/context";

export const basePieConfig = (chartData) => {
    const { chart } = useChartContext();
    const { threeDimensions } = chart;
    const { is3D, alpha, beta, depth } = threeDimensions;
    return {
        ...baseConfig,
        chart: {
            type: "pie",
            options3d: {
                enabled: is3D,
                alpha,
                beta,
            },
        },
        series: [
            {
                showInLegend: true,
                dataLabels: {
                    enabled: false,
                },
                data: chartData,
            },
        ],
    };
};
