import React, { FC } from "react";
import { GraphPreviewContainer } from "./GraphPreviewStyles";

interface IGraphPreviewProps {
    glug: boolean;
}

export const GraphPreview: React.FunctionComponent<IGraphPreviewProps> = (props) => {
    return <GraphPreviewContainer>{"Hello world"}</GraphPreviewContainer>;
};
