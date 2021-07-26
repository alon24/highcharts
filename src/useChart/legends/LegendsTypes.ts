import { FunctionComponent } from "react";

type ILegendComponent = FunctionComponent<{ legendItem: ILegendItem }>;

export interface ILegends {
    legendItems: ILegendItems;
    LegendComponent?: ILegendComponent;
}

export type ILegendItems = Array<ILegendItem>;

interface ILegendItem {
    label: string;
    checked?: boolean;
    data?: string;
    subtitleText?: string;
    visible?: boolean;
    color?: string;
    isDisabled?: boolean;
    tooltip?: string;
}

export type ILegendsComponent = FunctionComponent;
