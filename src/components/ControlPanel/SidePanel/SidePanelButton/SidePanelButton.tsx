import React, { FC } from "react";
import { GraphType } from "../../../Main/MainTypes";
import { ButtonContainer, ButtonImage } from "./SidePanelButtonStyles";
import { ISidePanelButtonProps } from "./SidePanelButtonTypes";

export const SidePanelButton: FC<ISidePanelButtonProps> = (props) => {
    const { isActive, altText, imageSrc, onClick, graphType } = props;
    return (
        <ButtonContainer isActive={isActive} onClick={() => onClick(graphType)}>
            <ButtonImage src={imageSrc} alt={altText} />
        </ButtonContainer>
    );
};
