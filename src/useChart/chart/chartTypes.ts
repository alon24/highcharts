import { FunctionComponent } from "react";

export enum EChartType {
    LINE,
    BAR,
    PIE,
    DONUT,
    AREA,
    SCATTER,
}

export type IChartComponent = FunctionComponent;

export interface IChart {
    chartData: Record<string, any>[];
    chartType: EChartType;
    is3D: boolean;
    overrideConfig?: Record<string, any>;
}
