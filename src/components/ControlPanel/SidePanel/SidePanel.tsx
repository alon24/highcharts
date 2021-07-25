import React, { FC, useCallback } from "react";
import { SidePanelButton } from "./SidePanelButton/SidePanelButton";
import { SidePanelContainer } from "./SidePanelStyles";
import { ISidePanelProps } from "./SidePanelTypes";
import { GraphType } from "../../Main/MainTypes";
import { ReactComponent as DounghtChart } from "../../../../media/pie-chart.svg";
import { ReactComponent as LineChart } from "../../../../media/line-chart.svg";
import { ReactComponent as BarChart } from "../../../../media/bar-chart.svg";

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
                imageSrc={DounghtChart}
                isActive={selectedGraphType === "Doughnut"}
            />
            <SidePanelButton
                graphType={"Bar"}
                onClick={handleButtonClick}
                imageSrc={BarChart}
                isActive={selectedGraphType === "Bar"}
            />
            <SidePanelButton
                graphType={"Line"}
                onClick={handleButtonClick}
                imageSrc={LineChart}
                isActive={selectedGraphType === "Line"}
            />
        </SidePanelContainer>
    );
};
