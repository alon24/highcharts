import React, { FC, useCallback } from "react";
import { SidePanelButton } from "./SidePanelButton/SidePanelButton";
import { SidePanelContainer } from "./SidePanelStyles";
import { ISidePanelProps } from "./SidePanelTypes";
import { GraphType } from "../../Main/MainTypes";

export const SidePanel: FC<ISidePanelProps> = (props) => {
    const { onSelectGraphType, selectedGraphType } = props;

    const handleButtonClick = useCallback((graphType: GraphType) => {
        onSelectGraphType && onSelectGraphType(graphType);
    }, []);

    return (
        <SidePanelContainer>
            <SidePanelButton
                graphType={"Doughnut"}
                onClick={handleButtonClick}
                imageSrc=""
                isActive={selectedGraphType === "Doughnut"}
            />
            <SidePanelButton
                graphType={"Bar"}
                onClick={handleButtonClick}
                imageSrc=""
                isActive={selectedGraphType === "Bar"}
            />
            <SidePanelButton
                graphType={"Line"}
                onClick={handleButtonClick}
                imageSrc=""
                isActive={selectedGraphType === "Line"}
            />
        </SidePanelContainer>
    );
};
