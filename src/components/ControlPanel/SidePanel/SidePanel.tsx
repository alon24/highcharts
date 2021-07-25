import React, { FC, useCallback, useMemo } from "react";
import { SidePanelButton } from "./SidePanelButton/SidePanelButton";
import { SidePanelContainer } from "./SidePanelStyles";
import { ISidePanelProps } from "./SidePanelTypes";
import DonutChart from "../../../media/donut-chart.svg";
import LineChart from "../../../media/line-chart.svg";
import BarChart from "../../../media/bar-chart.svg";
import DonutChartSelected from "../../../media/donut-chart-white.svg";
import LineChartSelected from "../../../media/line-chart-white.svg";
import BarChartSelected from "../../../media/bar-chart-white.svg";
import { GraphType } from "../../../AppTypes";

const buttonsConfig = [
    {
        type: "Pie" as GraphType,
        imageSrc: DonutChart,
        imageSelectedSrc: DonutChartSelected,
    },
    {
        type: "Bar" as GraphType,
        imageSrc: BarChart,
        imageSelectedSrc: BarChartSelected,
    },
    {
        type: "Line" as GraphType,
        imageSrc: LineChart,
        imageSelectedSrc: LineChartSelected,
    },
];

export const SidePanel: FC<ISidePanelProps> = (props) => {
    const { onSelectGraphType, selectedGraphType } = props;

    const handleButtonClick = useCallback((graphType: GraphType) => {
        onSelectGraphType && onSelectGraphType(graphType);
    }, []);

    const Buttons = useMemo(() => {
        return buttonsConfig.map((buttonDetails) => {
            return (
                <SidePanelButton
                    key={buttonDetails.type}
                    graphType={buttonDetails.type}
                    onClick={handleButtonClick}
                    imageSrc={buttonDetails.imageSrc}
                    imageSelectedSrc={buttonDetails.imageSelectedSrc}
                    altText={buttonDetails.type}
                    isActive={buttonDetails.type === selectedGraphType}
                />
            );
        });
    }, [selectedGraphType, handleButtonClick]);

    return <SidePanelContainer>{Buttons}</SidePanelContainer>;
};
