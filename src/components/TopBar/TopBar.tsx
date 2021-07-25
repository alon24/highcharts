import React, { FC } from "react";
import { TopBarContainer, TopBarLogo } from "./TopBarStyles";
import SimilarMetricLogo from "../../media/similarmetric-logo-white.svg";

export const TopBar: FC = (props) => {
    return (
        <TopBarContainer>
            <TopBarLogo src={SimilarMetricLogo} />
        </TopBarContainer>
    );
};
