import React, { FC } from "react";
import { Collapsible, CollapsibleToggle } from "@similarweb/ui-components/dist/collapsible/";
import styled from "styled-components";
import { PanelSectionToggle } from "./PanelSectionToggle";
import { PanelContainer } from "./PanelSectionStyles";

interface IPanelSectionProps {
    text: string;
    isOpened: boolean;
    onToggle: (isOpen: boolean) => void;
}
export const PanelSection: FC<IPanelSectionProps> = (props) => {
    return (
        <PanelContainer>
            <PanelSectionToggle
                isActive={props.isOpened}
                text={props.text}
                onClick={() => props.onToggle(!props.isOpened)}
            />
            <Collapsible isActive={props.isOpened}>{props.children}</Collapsible>
        </PanelContainer>
    );
};
