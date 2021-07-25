import React, { FC } from "react";
import { Tabs } from "../../../TopBar/Tabs/Tabs";
import { TopPartContainer } from "./TopPartStyles";
import { ITopPartProps } from "./TopPartTypes";

export const TopPart: React.FunctionComponent<ITopPartProps> = (props) => {
    const { selectedTab, onSelectTab } = props;
    return (
        <TopPartContainer>
            <Tabs selectedTab={selectedTab} onSelectTab={onSelectTab} />
        </TopPartContainer>
    );
};
