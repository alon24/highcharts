import React, { useCallback, useState } from "react";
import styled from "styled-components/macro";
import { Consumer, ConsumerB } from "../src/Consumer/Consumer";
import { AppContainer, AppContentContainer } from "./AppStyles";
import { GraphType } from "./AppTypes";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { GraphPreview } from "./components/GraphPreview/GraphPreview";
import { TopBar } from "./components/TopBar/TopBar";

export const App: React.FC = () => {
    const [selectedGraphType, setSelectedGraphType] = useState<GraphType>("Pie");

    const handleSelectGraphType = useCallback(
        (type: GraphType) => {
            setSelectedGraphType(type);
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
                />
                <GraphPreview glug={true} />
            </AppContentContainer>
        </AppContainer>
    );
};
