import React, { FC } from "react";
import { ControlPanelContainer } from "./ControlPanelStyles";
import { SidePanel } from "./SidePanel/SidePanel";
import { IControlPanelProps } from "./ControlPanelTypes";
import { MainPanel } from "./MainPanel/MainPanel";
import { ScrollArea } from "@similarweb/ui-components/dist/react-scrollbar";

const scrollbarStyles = { borderRadius: 5 };

export const ControlPanel: FC = () => {
    return (
        <ControlPanelContainer>
            <SidePanel />
            <ScrollArea
                className="ScrollBarStory-area"
                contentClassName="ScrollBarStory-content"
                verticalScrollbarStyle={scrollbarStyles}
                verticalContainerStyle={scrollbarStyles}
                horizontalScrollbarStyle={scrollbarStyles}
                horizontalContainerStyle={scrollbarStyles}
                smoothScrolling={true}
                minScrollSize={40}
            >
                <div>
                    <MainPanel />
                </div>
            </ScrollArea>
        </ControlPanelContainer>
    );
};
