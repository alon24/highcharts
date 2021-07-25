import React, { FC } from "react";
import { TopBarContainer, TopBarLogo } from "./TopBarStyles";
import BarChartSelected from "../../../media/bar-chart-white.svg";

export const TopBar: FC = (props) => {
    return (
        <TopBarContainer>
            <TopBarLogo />
        </TopBarContainer>
    );
};
