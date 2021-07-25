import React, { FC } from "react";
import { GraphType } from "../../../Main/MainTypes";
import { ISidePanelButtonProps } from "./SidePanelButtonTypes";

export const SidePanelButton: FC<ISidePanelButtonProps> = (props) => {
    return <img src={props.imageSrc} alt={props.altText} />;
};
