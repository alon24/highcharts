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
        isExcel,
        isPng,
        isDashboard,
        chartTitle,
        chartTooltip,
        alphaAngle,
        betaAngle,
        depth,
    } = useAppContext();
    const consolidateAlphaAngle = (alphaAngle / 100) * 6 + 2;
    const consolidateBetaAngle = ((45 + 45) * (betaAngle - 0)) / (100 - 0) - 45;
    const consolidateDepth = ((100 - 20) * (depth - 0)) / (100 - 0) + 20;
    const threeDimensions = {
        is3D: is3DGraph,
        alpha: consolidateAlphaAngle,
        beta: consolidateBetaAngle,
        depth: consolidateDepth,
    };
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
