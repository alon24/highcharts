import React, { FC, useCallback, useMemo } from "react";
import { SidePanelButton } from "./SidePanelButton/SidePanelButton";
import { SidePanelContainer } from "./SidePanelStyles";
import { ISidePanelProps } from "./SidePanelTypes";
import { GraphType } from "../../Main/MainTypes";
import DounghtChart from "../../../media/pie-chart.svg";
import LineChart from "../../../media/line-chart.svg";
import BarChart from "../../../media/bar-chart.svg";

const buttonsDetails = [
    {
        type: "Doughnut" as GraphType,
        imageSrc: DounghtChart,
    },
    {
        type: "Bar" as GraphType,
        imageSrc: BarChart,
    },
    {
        type: "Line" as GraphType,
        imageSrc: LineChart,
    },
];

export const SidePanel: FC<ISidePanelProps> = (props) => {
    const { onSelectGraphType, selectedGraphType } = props;

    const handleButtonClick = useCallback((graphType: GraphType) => {
        onSelectGraphType && onSelectGraphType(graphType);
    }, []);

    const Buttons = useMemo(() => {
        return buttonsDetails.map((buttonDetails) => {
            return (
                <SidePanelButton
                    key={buttonDetails.type}
                    graphType={buttonDetails.type}
                    onClick={handleButtonClick}
                    imageSrc={buttonDetails.imageSrc}
                    altText={buttonDetails.type}
                    isActive={buttonDetails.type === selectedGraphType}
                />
            );
        });
    }, [selectedGraphType, handleButtonClick]);

    return <SidePanelContainer>{Buttons}</SidePanelContainer>;
};
