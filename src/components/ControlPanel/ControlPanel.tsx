import React, { FC } from "react";
import { ControlPanelContainer } from "./ControlPanelStyles";
import { SidePanel } from "./SidePanel/SidePanel";
import { IControlPanelProps } from "./ControlPanelTypes";
import { MainPanel } from "./MainPanel/MainPanel";

export const ControlPanel: FC = () => {
    return (
        <ControlPanelContainer>
            <SidePanel />
            <MainPanel />
        </ControlPanelContainer>
    );
};
