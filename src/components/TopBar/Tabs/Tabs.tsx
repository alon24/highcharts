import React from "react";
import { TabType } from "../../../AppTypes";
import { Tab } from "./Tab";
import { TabsContainer } from "./TabsStyles";

interface ITabsProps {
    selectedTab: TabType;
    onSelectTab: (type: TabType) => void;
}

export const Tabs: React.FunctionComponent<ITabsProps> = (props) => {
    const { selectedTab, onSelectTab } = props;

    return (
        <TabsContainer>
            <Tab type={"Design"} isActive={selectedTab === "Design"} onClick={onSelectTab}></Tab>
            <Tab type={"Code"} isActive={selectedTab === "Code"} onClick={onSelectTab}></Tab>
        </TabsContainer>
    );
};
