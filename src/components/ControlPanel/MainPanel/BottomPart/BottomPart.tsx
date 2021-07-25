import React, { FC } from "react";
import { PanelSection } from "../../../Common/PanelSection/PanelSection";
import { BottomPartContainer, TitleWrapper } from "./BottomPartStyles";
import { GraphSection } from "./GraphSection/GraphSection";
import { HeaderSection } from "./HeaderSection/HeaderSection";
import { LegendSection } from "./LegendSection/LegendSection";
import { ThreeDimSection } from "./ThreeDimSection/ThreeDimSection";
import { TooltipSection } from "./TooltipSection/TooltipSection";
import { useContext } from "react";
import { AppContext } from "../../../../AppContext/AppContext";
import { Title } from "../../../Common/Title/Title";

export const BottomPart: React.FunctionComponent = () => {
    const { graphType } = useContext(AppContext);

    return (
        <BottomPartContainer>
            <TitleWrapper>
                <Title text={`${graphType} Chart`} />
            </TitleWrapper>
            <HeaderSection />
            <LegendSection />
            <GraphSection />
            <TooltipSection />
            <ThreeDimSection />
        </BottomPartContainer>
    );
};
