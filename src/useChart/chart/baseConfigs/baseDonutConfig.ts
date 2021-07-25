import { baseConfig } from "./baseConfig";

export const baseDonutConfig = (chartData) => ({
    ...baseConfig,
    chart: {
        type: "pie",
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
});
