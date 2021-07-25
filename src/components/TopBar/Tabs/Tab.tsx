import React, { FC } from "react";
import { TabType } from "../../../AppTypes";
import { TabContainer } from "./TabsStyles";

interface ITabProps {
    type: TabType;
    isActive: boolean;
    onClick: (type: TabType) => void;
}

export const Tab: FC<ITabProps> = (props) => {
    const { type, isActive, onClick } = props;

    return (
        <TabContainer isActive={isActive} onClick={() => onClick(type)}>
            <span>{type}</span>
        </TabContainer>
    );
};
