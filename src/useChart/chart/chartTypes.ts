import { FunctionComponent } from "react";

export enum EChartType {
    LINE,
    BAR,
    PIE,
    DONUT,
    AREA,
}

export type IChartComponent = FunctionComponent;

export interface IChart {
    chartData: Record<string, any>[];
    chartType: EChartType;
    overrideConfig?: Record<string, any>;
}
