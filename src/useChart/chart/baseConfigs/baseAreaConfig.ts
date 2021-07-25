import { baseConfig } from "./baseConfig";

export const baseAreaConfig = (chartData) => ({
    ...baseConfig,
    chart: {
        type: "area",
    },
    series: chartData,
    plotOptions: {
        area: {
            marker: {
                enabled: false,
            },
            stacking: "normal",
            connectNulls: true,
            fillOpacity: 1,
            lineWidth: 0.5,
        },
        series: {
            fillOpacity: 1,
            animation: true,
        },
    },
    yAxis: [
        {
            title: {
                text: null,
            },
            gridLineColor: "rgba(200,200,200,0.4)",
            gridLineWidth: 1,
            gridLineDashStyle: "solid",
            lineWidth: 0,
            reversed: false,
            allowDecimals: true,
            startOnTick: false,
            endOnTick: true,
            tickPositioner: null,
            gridZIndex: 4,
            showFirstLabel: false,
            showLastLabel: true,
            ceiling: 1,
            isDirty: true,
            min: 0,
        },
        {
            labels: {
                enabled: false,
            },
            title: {
                text: null,
            },
            gridLineColor: "rgba(200,200,200,0.4)",
            gridLineWidth: 1,
            gridLineDashStyle: "solid",
            lineWidth: 0,
            reversed: false,
            allowDecimals: true,
            startOnTick: false,
            endOnTick: true,
            tickPositioner: null,
            gridZIndex: 4,
            showFirstLabel: false,
            showLastLabel: true,
            ceiling: 1,
            isDirty: true,
            min: 0,
        },
    ],
    xAxis: {
        gridLineWidth: 0,
        gridLineDashStyle: "dash",
        labels: {
            style: {
                textTransform: "capitalize",
                fontSize: "11px",
                color: "#919191",
                fontFamily: "Roboto",
            },
        },
        minPadding: 0,
        maxPadding: 0,
        type: "datetime",
        //plotLines: getPlotLineIndicators(webSource),
    },
});
