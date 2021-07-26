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
    Pie: DONUT,
    Doughnut: DONUT,
    Bar: DONUT,
    Line: DONUT,
    Area: AREA,
    Scatter: DONUT,
};

export const GraphPreview: React.FunctionComponent<IGraphPreviewProps> = (props) => {
    const { graphType, seriesCount, is3DGraph } = useAppContext();
    return (
        <GraphPreviewContainer>
            <Consumer
                chartType={GraphTypeToEnum[graphType]}
                seriesCount={seriesCount}
                is3D={is3DGraph}
            />
        </GraphPreviewContainer>
    );
};
