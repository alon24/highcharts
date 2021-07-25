import React from "react";
import { BottomPart } from "./BottomPart/BottomPart";
import { MainPanelContainer } from "./MainPanelStyles";
import { IMainPanelProps } from "./MainPanelTypes";
import { TopPart } from "./TopPart/TopPart";

export const MainPanel: React.FunctionComponent = () => {
    return (
        <MainPanelContainer>
            <TopPart />
            <BottomPart />
        </MainPanelContainer>
    );
};
