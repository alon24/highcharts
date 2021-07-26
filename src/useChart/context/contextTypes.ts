import { ILegendItems, ILegends } from "../legends/LegendsTypes";
import { FunctionComponent } from "react";
import { EChartType, IChart } from "../chart/chartTypes";

export interface ICartActions {
    setLegendItems: (legendItems: ILegendItems) => void;
}

export interface IChartContext {
    legends?: ILegends;
    chart?: IChart;
    actions: ICartActions;
}

export type IChartContextInitialValue = Pick<IChartContext, "legends" | "chart">;

export type IChartContextProvider = FunctionComponent;
