import React, { useContext } from "react";
import { BottomPart } from "./BottomPart/BottomPart";
import { MainPanelContainer } from "./MainPanelStyles";
import { IMainPanelProps } from "./MainPanelTypes";
import { TopPart } from "./TopPart/TopPart";
import { Tabs } from "../../TopBar/Tabs/Tabs";
import { AppContext, useAppContext } from "../../../AppContext/AppContext";
import { Code } from "../../../code/Code";
import { BottomPartContainer } from "./BottomPart/BottomPartStyles";

export const MainPanel: React.FunctionComponent = () => {
    const { panelTab, setPanelTab } = useAppContext();
    return (
        <MainPanelContainer>
            <Tabs selectedTab={panelTab} onSelectTab={setPanelTab} />
            {panelTab === "Design" && (
                <div>
                    <TopPart />
                    <BottomPart />
                </div>
            )}
            {panelTab === "Code" && (
                <div>
                    <BottomPartContainer>
                        <Code />
                    </BottomPartContainer>
                </div>
            )}
        </MainPanelContainer>
    );
};
