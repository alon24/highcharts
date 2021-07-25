import React from "react";
import { BottomPart } from "./BottomPart/BottomPart";
import { MainPanelContainer } from "./MainPanelStyles";
import { TopPart } from "./TopPart/TopPart";

export const MainPanel: React.FunctionComponent = () => {
    return (
        <MainPanelContainer>
            <TopPart glug={true} />
            <BottomPart glug={true} />
        </MainPanelContainer>
    );
};
