import React, { FC, useCallback } from "react";
import { Title } from "../../../Common/Title/Title";
import { Tabs } from "../../../TopBar/Tabs/Tabs";
import { TitleContainer, TopPartContainer } from "./TopPartStyles";
import { OnOffSwitch } from "@similarweb/ui-components/dist/on-off-switch";
import { useContext } from "react";
import { AppContext } from "../../../../AppContext/AppContext";
import { Switch3D } from "./Switch3D";

export const TopPart: React.FunctionComponent = () => {
    const { panelTab, setPanelTab, is3DGraph, setIs3DGraph } = useContext(AppContext);

    return (
        <TopPartContainer>
            <Tabs selectedTab={panelTab} onSelectTab={setPanelTab} />
            <TitleContainer>
                <Title text={"Chart Type"} />
            </TitleContainer>
            <Switch3D is3DGraph={is3DGraph} onSetIs3DGraph={() => setIs3DGraph(!is3DGraph)} />
        </TopPartContainer>
    );
};
