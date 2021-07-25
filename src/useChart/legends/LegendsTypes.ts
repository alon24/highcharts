import { FunctionComponent } from "react";

type ILegendComponent = FunctionComponent<{ legendItem: ILegendItem }>;

export interface ILegends {
    legendItems: ILegendItems;
    LegendComponent?: ILegendComponent;
}

type ILegendItems = Array<ILegendItem>;

interface ILegendItem {
    label: string;
    data?: string;
    subtitleText?: string;
    visible?: boolean;
    color?: string;
    isDisabled?: boolean;
    tooltip?: string;
}

export type ILegendsComponent = FunctionComponent;
