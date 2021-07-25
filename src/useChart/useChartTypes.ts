import { ILegendsComponent } from "./legends/LegendsTypes";
import { IChartContextInitialValue, IChartContextProvider } from "./context/contextTypes";
import { IChartComponent } from "./chart/chartTypes";
import { IChartTitleComponent } from "./Title/chartTitleTypes";

export interface IChartUtils {
    Legends: ILegendsComponent;
    ChartTitle: IChartTitleComponent;
    Chart: IChartComponent;
    ChartContextProvider: IChartContextProvider;
}
export interface IUseChartArgs {
    chartContextInitialValue?: IChartContextInitialValue;
}

export type IUseChart = (useChartArgs: IUseChartArgs) => IChartUtils;
