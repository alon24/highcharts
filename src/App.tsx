import React, { useCallback, useState } from "react";
import styled from "styled-components/macro";
import { Consumer, ConsumerB } from "../src/Consumer/Consumer";
import { AppContainer, AppContentContainer } from "./AppStyles";
import { GraphType, TabType } from "./AppTypes";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { GraphPreview } from "./components/GraphPreview/GraphPreview";
import { TopBar } from "./components/TopBar/TopBar";

export const App: React.FC = () => {
    const [selectedGraphType, setSelectedGraphType] = useState<GraphType>("Pie");
    const [selectedTab, setSelectedTab] = useState<TabType>("Design");

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

    return (
        <AppContainer>
            <TopBar />
            <AppContentContainer>
                <ControlPanel
                    onSelectGraphType={handleSelectGraphType}
                    selectedGraphType={selectedGraphType}
                    selectedTab={selectedTab}
                    onSelectTab={handleSelectTab}
                />
                <GraphPreview glug={true} />
            </AppContentContainer>
        </AppContainer>
    );
};
