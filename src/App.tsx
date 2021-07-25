import React, { useCallback, useState } from "react";
import styled from "styled-components/macro";
import { Consumer, ConsumerB } from "../src/Consumer/Consumer";
import { AppContext } from "./AppContext/AppContext";
import { AppContainer, AppContentContainer } from "./AppStyles";
import { DataSet, GraphType, TabType } from "./AppTypes";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { GraphPreview } from "./components/GraphPreview/GraphPreview";
import { TopBar } from "./components/TopBar/TopBar";

export const App: React.FC = () => {
    const [selectedGraphType, setSelectedGraphType] = useState<GraphType>("Pie");
    const [selectedTab, setSelectedTab] = useState<TabType>("Design");
    const [is3DGraph, setIs3DGraph] = useState(false);
    const [dataSet, setDataSet] = useState<DataSet>("Gender");
    const [seriesCount, setSeriesCount] = useState<number>(2);

    const [isHeaderSectionOpen, setIsHeaderSectionOpen] = useState(true);
    const [isLegendSectionOpen, setIsLegendSectionOpen] = useState(false);
    const [isGraphSectionOpen, setIsGraphSectionOpen] = useState(false);
    const [isTooltipSectionOpen, setIsTooltipSectionOpen] = useState(false);
    const [is3DSectionOpen, setIs3DSectionOpen] = useState(false);

    const handleSelectGraphType = useCallback(
        (type: GraphType) => {
            setSelectedGraphType(type);
        },
        [selectedGraphType],
    );

    const handleSelectTab = useCallback(
        (type: TabType) => {
            setSelectedTab(type);
        },
        [selectedGraphType],
    );

    const handleSetIs3DGraph = useCallback(
        (is3D: boolean) => {
            setIs3DGraph(is3D);
        },
        [setIs3DGraph],
    );

    const handleSelectDataSet = useCallback(
        (dataSet: DataSet) => {
            setDataSet(dataSet);
        },
        [setDataSet],
    );

    const handleSetSeriesCount = useCallback(
        (count: number) => {
            setSeriesCount(count);
        },
        [setSeriesCount],
    );

    const context = {
        panelTab: selectedTab,
        graphType: selectedGraphType,
        is3DGraph: is3DGraph,
        dataSet: dataSet,
        seriesCount: seriesCount,
        setPanelTab: handleSelectTab,
        setGraphType: handleSelectGraphType,
        setIs3DGraph: handleSetIs3DGraph,
        setDataSet: handleSelectDataSet,
        setSeriesCount: handleSetSeriesCount,

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
