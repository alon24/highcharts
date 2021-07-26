import React, { FC, useCallback, useMemo } from "react";
import { SidePanelButton } from "./SidePanelButton/SidePanelButton";
import { SidePanelContainer } from "./SidePanelStyles";
import { ISidePanelProps } from "./SidePanelTypes";
import DonutChart from "../../../media/donut-chart.svg";
import PieChart from "../../../media/pie-chart.svg";
import LineChart from "../../../media/line-chart.svg";
import AreaChart from "../../../media/area-chart.svg";
import ScatterChart from "../../../media/scatter-chart.svg";
import BarChart from "../../../media/bar-chart.svg";
import DonutChartSelected from "../../../media/donut-chart-white.svg";
import PieChartSelected from "../../../media/pie-chart-white.svg";
import LineChartSelected from "../../../media/line-chart-white.svg";
import AreaChartSelected from "../../../media/area-chart-white.svg";
import BarChartSelected from "../../../media/bar-chart-white.svg";
import { GraphType } from "../../../AppTypes";
import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";

const buttonsConfig = [
    {
        type: "Pie" as GraphType,
        imageSrc: PieChart,
        imageSelectedSrc: PieChartSelected,
    },
    {
        type: "Doughnut" as GraphType,
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
    {
        type: "Area" as GraphType,
        imageSrc: AreaChart,
        imageSelectedSrc: AreaChartSelected,
    },
];

export const SidePanel: FC = () => {
    const { graphType, setGraphType, closeAllSections } = useContext(AppContext);

    const handleButtonClick = useCallback((graphType: GraphType) => {
        setGraphType && setGraphType(graphType);
        closeAllSections();
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
                    isActive={buttonDetails.type === graphType}
                />
            );
        });
    }, [graphType, handleButtonClick]);

    return <SidePanelContainer>{Buttons}</SidePanelContainer>;
};
