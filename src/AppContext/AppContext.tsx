import React from "react";
import { DataSet, GraphType, TabType } from "../AppTypes";

const noopFunc = () => void 0;

export interface IAppContext {
    /**
     * Control Panel Top Props
     */
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

    /**
     * Section Toggles
     */
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

    /**
     * Header Section Props
     */
    chartTitle: string;
    chartTooltip?: string;
    hasPeriod: boolean;
    hasCountry: boolean;
    hasTrafficSource: boolean;
    setChartTitle: (title: string) => void;
    setTooltip: (tooltip: string) => void;
    setHasPeriod: (hasPeriod: boolean) => void;
    setHasCountry: (hasCountry: boolean) => void;
    setHasTrafficSource: (hasTrafficSource: boolean) => void;

    /**
     * Legend Section Props
     */
    isIconLegend: boolean;
    setIsIconLegend: (isIcon: boolean) => void;

    /**
     * Graph Section Props
     */
    // Sets the distance between pieChart pieces
    pieChartSliceGap: number;
    setPieChartSliceGap: (gap: number) => void;

    // Sets if the pieChart should be a pie or dougnut
    isPieChart: boolean;
    setIsPieChart: (isPieChart: boolean) => void;

    /**
     * 3D Section Props
     */
    alphaAngle: number;
    setAlphaAngle: (alpha: number) => void;

    betaAngle: number;
    setBetaAngle: (beta: number) => void;

    depth?: number;
    setDepth: (depth: number) => void;
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

    chartTitle: "Chart Title",
    hasPeriod: true,
    hasCountry: true,
    hasTrafficSource: true,
    setChartTitle: noopFunc,
    setTooltip: noopFunc,
    setHasPeriod: noopFunc,
    setHasCountry: noopFunc,
    setHasTrafficSource: noopFunc,

    isIconLegend: false,
    setIsIconLegend: noopFunc,

    pieChartSliceGap: 2,
    setPieChartSliceGap: noopFunc,

    isPieChart: false,
    setIsPieChart: noopFunc,

    alphaAngle: 0,
    setAlphaAngle: noopFunc,

    betaAngle: 0,
    setBetaAngle: noopFunc,
    setDepth: noopFunc,
});
