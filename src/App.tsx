import React, { useState } from "react";
import { AppContext } from "./AppContext/AppContext";
import { AppContainer, AppContentContainer } from "./AppStyles";
import { DataSet, GraphType, TabType } from "./AppTypes";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { GraphPreview } from "./components/GraphPreview/GraphPreview";
import { TopBar } from "./components/TopBar/TopBar";

export const App: React.FC = () => {
    /**
     * Top Panel Props
     */
    const [selectedGraphType, setSelectedGraphType] = useState<GraphType>("Pie");
    const [selectedTab, setSelectedTab] = useState<TabType>("Design");
    const [is3DGraph, setIs3DGraph] = useState(false);
    const [dataSet, setDataSet] = useState<DataSet>("Gender");
    const [seriesCount, setSeriesCount] = useState<number>(5);

    /**
     * Section Toggles
     */
    const [isHeaderSectionOpen, setIsHeaderSectionOpen] = useState(true);
    const [isLegendSectionOpen, setIsLegendSectionOpen] = useState(false);
    const [isGraphSectionOpen, setIsGraphSectionOpen] = useState(false);
    const [isTooltipSectionOpen, setIsTooltipSectionOpen] = useState(false);
    const [is3DSectionOpen, setIs3DSectionOpen] = useState(false);

    /**
     * Header Section Props
     */
    const [chartTitle, setChartTitle] = useState("Chart Title");
    const [chartTooltip, setChartTooltip] = useState<string>("info");
    const [hasPeriod, setHasPeriod] = useState(true);
    const [hasCountry, setHasCountry] = useState(true);
    const [hasTrafficSource, setHasTrafficSource] = useState(true);
    const [isPng, setIsPng] = useState(true);
    const [isExcel, setIsExcel] = useState(true);
    const [isDashboard, setIsDashboard] = useState(true);

    /**
     * Legend Section Props
     */
    const [isIconLegend, setIsIconLegend] = useState(false);

    /**
     * Graph Section Props
     */
    // Sets the distance between pieChart pieces
    const [pieChartSliceGap, setPieChartSliceGap] = useState(3);

    /**
     * 3D Section Props
     */
    const [alphaAngle, setAlphaAngle] = useState(0);
    const [betaAngle, setBetaAngle] = useState(0);
    const [depth, setDepth] = useState<number>(null);

    const context = {
        panelTab: selectedTab,
        graphType: selectedGraphType,
        is3DGraph: is3DGraph,
        dataSet: dataSet,
        seriesCount: seriesCount,
        setPanelTab: (type: TabType) => setSelectedTab(type),
        setGraphType: (type: GraphType) => setSelectedGraphType(type),
        setIs3DGraph: (is3D: boolean) => setIs3DGraph(is3D),
        setDataSet: (dataSet: DataSet) => setDataSet(dataSet),
        setSeriesCount: (count: number) => setSeriesCount(count),

        isHeaderSectionOpen: isHeaderSectionOpen,
        isLegendSectionOpen: isLegendSectionOpen,
        isGraphSectionOpen: isGraphSectionOpen,
        isTooltipSectionOpen: isTooltipSectionOpen,
        is3DSectionOpen: is3DSectionOpen,
        setIsHeaderSectionOpen: (isOpen) => setIsHeaderSectionOpen(isOpen),
        setIsLegendSectionOpen: (isOpen) => setIsLegendSectionOpen(isOpen),
        setIsGraphSectionOpen: (isOpen) => setIsGraphSectionOpen(isOpen),
        setIsTooltipSectionOpen: (isOpen) => setIsTooltipSectionOpen(isOpen),
        setIs3DSectionOpen: (isOpen) => setIs3DSectionOpen(isOpen),
        closeAllSections: () => {
            setIsHeaderSectionOpen(false);
            setIsLegendSectionOpen(false);
            setIsGraphSectionOpen(false);
            setIsTooltipSectionOpen(false);
            setIs3DSectionOpen(false);
        },
        isPng,
        isExcel,
        isDashboard,
        setIsPng: () => setIsPng(!isPng),
        setIsExcel: () => setIsExcel(!isExcel),
        setIsDashboard: () => setIsDashboard(!isDashboard),

        chartTitle: chartTitle,
        chartTooltip: chartTooltip,
        hasPeriod: hasPeriod,
        hasCountry: hasCountry,
        hasTrafficSource: hasTrafficSource,
        setChartTitle: (title: string) => setChartTitle(title),
        setTooltip: (tooltip: string) => setChartTooltip(tooltip),
        setHasPeriod: (hasPeriod: boolean) => setHasPeriod(hasPeriod),
        setHasCountry: (hasCountry: boolean) => setHasCountry(hasCountry),
        setHasTrafficSource: (hasTrafficSource: boolean) => setHasTrafficSource(hasTrafficSource),

        isIconLegend: isIconLegend,
        setIsIconLegend: (isIcon: boolean) => setIsIconLegend(isIcon),

        pieChartSliceGap: pieChartSliceGap,
        setPieChartSliceGap: (gap: number) => setPieChartSliceGap(gap),

        alphaAngle: alphaAngle,
        setAlphaAngle: (alpha: number) => setAlphaAngle(alpha),

        betaAngle: betaAngle,
        setBetaAngle: (beta: number) => setBetaAngle(beta),

        depth: depth,
        setDepth: (depth: number) => setDepth(depth),
    };

    return (
        <AppContext.Provider value={context}>
            <AppContainer>
                <TopBar />
                <AppContentContainer>
                    <ControlPanel />
                    <GraphPreview glug={true} />
                </AppContentContainer>
            </AppContainer>
        </AppContext.Provider>
    );
};
