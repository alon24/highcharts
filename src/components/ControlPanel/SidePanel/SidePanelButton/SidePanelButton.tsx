import React, { FC } from "react";
import { GraphType } from "../../../Main/MainTypes";
import { ButtonContainer, ButtonImage } from "./SidePanelButtonStyles";
import { ISidePanelButtonProps } from "./SidePanelButtonTypes";

export const SidePanelButton: FC<ISidePanelButtonProps> = (props) => {
    const { isActive, altText, imageSrc, imageSelectedSrc, onClick, graphType } = props;
    return (
        <ButtonContainer isActive={isActive} onClick={() => onClick(graphType)}>
            {!isActive && <ButtonImage src={imageSrc} alt={altText} />}
            {isActive && <ButtonImage src={imageSelectedSrc} alt={altText} />}
        </ButtonContainer>
    );
};
