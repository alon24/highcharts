import { ILegends } from "../legends/LegendsTypes";
import { FunctionComponent } from "react";
import { EChartType, IChart } from "../chart/chartTypes";

export interface IChartContext {
    legends?: ILegends;
    chart?: IChart;
}

export type IChartContextInitialValue = Pick<IChartContext, "legends" | "chart">;

export type IChartContextProvider = FunctionComponent;
