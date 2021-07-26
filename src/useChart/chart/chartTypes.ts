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

interface IThreeDimensions {
    is3D: boolean;
    alpha: number;
    beta: number;
    depth: number;
}

export interface IChart {
    chartData: Record<string, any>[];
    chartType: EChartType;
    threeDimensions: IThreeDimensions;
    overrideConfig?: Record<string, any>;
}
