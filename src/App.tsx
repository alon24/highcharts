import React, { useCallback, useState } from "react";
import styled from "styled-components/macro";
import { Consumer, ConsumerB } from "../src/Consumer/Consumer";
import { AppContext } from "./AppContext/AppContext";
import { AppContainer, AppContentContainer } from "./AppStyles";
import { GraphType, TabType } from "./AppTypes";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { GraphPreview } from "./components/GraphPreview/GraphPreview";
import { TopBar } from "./components/TopBar/TopBar";

export const App: React.FC = () => {
    const [selectedGraphType, setSelectedGraphType] = useState<GraphType>("Pie");
    const [selectedTab, setSelectedTab] = useState<TabType>("Design");
    const [is3DGraph, setIs3DGraph] = useState(false);

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

    const context = {
        panelTab: selectedTab,
        graphType: selectedGraphType,
        is3DGraph: is3DGraph,
        setPanelTab: handleSelectTab,
        setGraphType: handleSelectGraphType,
        setIs3DGraph: handleSetIs3DGraph,
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
