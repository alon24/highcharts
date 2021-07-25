import React, { FC } from "react";
import { TopPartContainer } from "./TopPartStyles";
import { ITopPartProps } from "./TopPartTypes";

export const TopPart: React.FunctionComponent<ITopPartProps> = (props) => {
    return <TopPartContainer>{"TOP PART"}</TopPartContainer>;
};
