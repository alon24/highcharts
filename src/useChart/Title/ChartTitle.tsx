import React, { useContext } from "react";
import styled from "styled-components/macro";
import { fonts } from "@similarweb/styles";
import { SWReactIcons } from "@similarweb/icons";
import { PlainTooltip } from "@similarweb/ui-components/dist/plain-tooltip";
import { useChartContext } from "../context/context";

const Text = styled.label<{ marginRight?: string }>`
    font-size: 2vw;
    color: #092540;
    font-family: ${fonts.$robotoFontFamily};
`;

export const ChartTitle = ({ children }) => {
    const { chartTitle } = useChartContext();
    const { tooltip } = chartTitle;
    return <BoxTitle tooltip={tooltip}>{children}</BoxTitle>;
};

const BoxTitle = ({ tooltip, children }) => {
    return (
        <div style={{ display: "flex" }}>
            <Text>{children}</Text>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginLeft: "6px",
                }}
            >
                <PlainTooltip tooltipContent={tooltip}>
                    <div>
                        <SWReactIcons iconName={"info"} size="sm" />
                    </div>
                </PlainTooltip>
            </div>
        </div>
    );
};
