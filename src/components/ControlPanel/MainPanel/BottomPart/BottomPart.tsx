import React, { FC } from "react";
import { BottomPartContainer } from "./BottomPartStyles";
import { IBottomPartProps } from "./BottomPartTypes";

export const BottomPart: React.FunctionComponent<IBottomPartProps> = (props) => {
    return <BottomPartContainer>{"Bottom part"}</BottomPartContainer>;
};
