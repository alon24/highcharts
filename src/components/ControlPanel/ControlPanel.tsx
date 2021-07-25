import React, { FC } from "react";
import { ControlPanelContainer } from "./ControlPanelStyles";
import { SidePanel } from "./SidePanel/SidePanel";
import { GraphType } from "../Main/MainTypes";
import { IControlPanelProps } from "./ControlPanelTypes";
import { MainPanel } from "./MainPanel/MainPanel";

export const ControlPanel: FC<IControlPanelProps> = (props) => {
    const { selectedGraphType, onSelectGraphType } = props;

    return (
        <ControlPanelContainer>
            <SidePanel
                selectedGraphType={selectedGraphType}
                onSelectGraphType={onSelectGraphType}
            />
            <MainPanel />
        </ControlPanelContainer>
    );
};
