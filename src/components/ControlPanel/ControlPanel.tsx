import React, { FC } from "react";
import { ControlPanelContainer } from "./ControlPanelStyles";
import { SidePanel } from "./SidePanel/SidePanel";
import { MainPanel } from "./MainPanel/MainPanel";

export const ControlPanel: FC = () => {
    return (
        <ControlPanelContainer>
            <SidePanel />
            <div
                style={{
                    overflowY: "auto",
                    backgroundColor: "white",
                    overflowX: "hidden",
                    height: "auto",
                }}
            >
                <MainPanel />
            </div>
        </ControlPanelContainer>
    );
};
