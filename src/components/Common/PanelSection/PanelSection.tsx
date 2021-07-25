import React, { FC } from "react";
import { Collapsible, CollapsibleToggle } from "@similarweb/ui-components/dist/collapsible/";
import styled from "styled-components";
import { PanelSectionToggle } from "./PanelSectionToggle";
import { PanelContainer } from "./PanelSectionStyles";

interface IPanelSectionProps {
    text: string;
    isOpened: boolean;
}
export const PanelSection: FC<IPanelSectionProps> = (props) => {
    return (
        <PanelContainer>
            <PanelSectionToggle
                isActive={props.isOpened}
                text={props.text}
                onClick={() => alert("glug")}
            />
            <Collapsible isActive={props.isOpened}>{"Hello world"}</Collapsible>
        </PanelContainer>
    );
};
