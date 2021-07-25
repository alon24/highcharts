import React from "react";
import { DataSet, GraphType, TabType } from "../AppTypes";

const noopFunc = () => void 0;

export interface IAppContext {
    panelTab: TabType;
    graphType: GraphType;
    is3DGraph: boolean;
    dataSet: DataSet;
    seriesCount: number;
    setPanelTab: (tab: TabType) => void;
    setGraphType: (type: GraphType) => void;
    setIs3DGraph: (is3d: boolean) => void;
    setDataSet: (dataSet: DataSet) => void;
    setSeriesCount: (count: number) => void;

    isHeaderSectionOpen: boolean;
    isLegendSectionOpen: boolean;
    isGraphSectionOpen: boolean;
    isTooltipSectionOpen: boolean;
    is3DSectionOpen: boolean;

    setIsHeaderSectionOpen: (isOpen: boolean) => void;
    setIsLegendSectionOpen: (isOpen: boolean) => void;
    setIsGraphSectionOpen: (isOpen: boolean) => void;
    setIsTooltipSectionOpen: (isOpen: boolean) => void;
    setIs3DSectionOpen: (isOpen: boolean) => void;
}

export const AppContext = React.createContext<IAppContext>({
    panelTab: "Design",
    graphType: "Pie",
    is3DGraph: false,
    dataSet: "Gender",
    seriesCount: 2,
    setDataSet: noopFunc,
    setPanelTab: noopFunc,
    setGraphType: noopFunc,
    setIs3DGraph: noopFunc,
    setSeriesCount: noopFunc,

    isHeaderSectionOpen: true,
    isLegendSectionOpen: false,
    isGraphSectionOpen: false,
    isTooltipSectionOpen: false,
    is3DSectionOpen: false,

    setIsHeaderSectionOpen: noopFunc,
    setIsLegendSectionOpen: noopFunc,
    setIsGraphSectionOpen: noopFunc,
    setIsTooltipSectionOpen: noopFunc,
    setIs3DSectionOpen: noopFunc,
});
