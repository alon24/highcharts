import { ILegendItems, ILegends } from "../legends/LegendsTypes";
import { FunctionComponent } from "react";
import { IChart } from "../chart/chartTypes";
import { IChartTitle } from "../Title/chartTitleTypes";

export interface ICartActions {
    setLegendItems: (legendItems: ILegendItems) => void;
}

export interface IChartContext {
    legends?: ILegends;
    chart?: IChart;
    actions: ICartActions;
    chartTitle?: IChartTitle;
}

export type IChartContextInitialValue = Pick<IChartContext, "legends" | "chart" | "chartTitle">;

export type IChartContextProvider = FunctionComponent;
