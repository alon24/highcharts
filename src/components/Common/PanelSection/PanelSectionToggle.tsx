import { SWReactIcons } from "@similarweb/icons";
import { ICollapsibleToggleProps } from "@similarweb/ui-components/dist/collapsible";
import React from "react";
import { FunctionComponent } from "react";
import { PanelToggleStyled, PanelToggleWrapperStyled } from "./PanelSectionStyles";

/**
 * Provides a collapser button with default style.
 * The collapser has no functionallty besides providing default style.
 * collapse / uncollapse logic should be implemented by providing an onClick handler.
 */
export const PanelSectionToggle: FunctionComponent<ICollapsibleToggleProps> = (props) => {
    const { text, isActive, onClick } = props;

    return (
        <PanelToggleWrapperStyled onClick={onClick}>
            <PanelToggleStyled hasTopBorder={false}>
                {text}
                <CollapsibleToggleIcon isActive={isActive} />
            </PanelToggleStyled>
        </PanelToggleWrapperStyled>
    );
};

/**
 * Default collapser icon. used in conjuction with the collapser. for providing
 * a cool style (rotating icon according to collapse state)
 */
const CollapsibleToggleIcon: FunctionComponent<{ isActive: boolean }> = (props) => {
    const iconName = props.isActive ? "chev-up" : "chev-down";

    return <SWReactIcons iconName={iconName} size="sm" />;
};
