import React, { FC } from "react";
import { GraphPreviewContainer } from "./GraphPreviewStyles";
import { Consumer } from "../../Consumer/Consumer";
import { useAppContext } from "../../AppContext/AppContext";
import { EChartType } from "../../useChart/chart/chartTypes";

interface IGraphPreviewProps {
    glug: boolean;
}

const { AREA, BAR, DONUT, LINE, PIE, SCATTER } = EChartType;

export const GraphTypeToEnum = {
    Pie: PIE,
    Doughnut: DONUT,
    Bar: BAR,
    Line: DONUT,
    Area: AREA,
    Scatter: DONUT,
};

export const GraphPreview: React.FunctionComponent<IGraphPreviewProps> = (props) => {
    const {
        graphType,
        seriesCount,
        is3DGraph,
        setIsExcel,
        setIsPng,
        setIsDashboard,
        isExcel,
        isPng,
        isDashboard,
        chartTitle,
        chartTooltip,
    } = useAppContext();
    const threeDimensions = { is3D: is3DGraph, alpha: 65, beta: 30, depth: 100 };
    return (
        <>
            <br />
            <br />
            <br />
            <GraphPreviewContainer>
                <Consumer
                    chartType={GraphTypeToEnum[graphType]}
                    seriesCount={seriesCount}
                    threeDimensions={threeDimensions}
                    chartTitle={{ tooltip: chartTooltip, title: chartTitle }}
                    isFiltersAndActionItems={{ isPng, isExcel, isDashboard }}
                />
            </GraphPreviewContainer>
        </>
    );
};
