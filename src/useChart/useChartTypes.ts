import { ILegendsComponent } from "./legends/LegendsTypes";
import { IChartContextInitialValue, IChartContextProvider } from "./context/contextTypes";
import { IChartComponent } from "./chart/chartTypes";
import { IChartTitleComponent } from "./Title/chartTitleTypes";
import { IFiltersAndActionItems } from "./filtersAndActionItems/filtersAndActionItemsTypes";

export interface IChartUtils {
    Legends: ILegendsComponent;
    ChartTitle: IChartTitleComponent;
    Chart: IChartComponent;
    ChartContextProvider: IChartContextProvider;
    filtersAndActionItems: IFiltersAndActionItems;
}
export interface IUseChartArgs {
    chartContextInitialValue?: IChartContextInitialValue;
}

export type IUseChart = (useChartArgs: IUseChartArgs) => IChartUtils;
