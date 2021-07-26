import { colorsPalettes, fonts } from "@similarweb/styles";
import styled from "styled-components";

export const PanelContainer = styled.div`
    border-bottom: 1px solid #cbd1d7;
    width: 328px;
`;

/**
 * Provides collapse / uncollapse animation for collapser divs
 */
export const PanelTransitionContainerStyled = styled.div.attrs<{
    isActive: boolean;
    maxHeight: number;
}>({
    "data-automation": ({ isActive }) =>
        isActive ? "collapsible-collapsed" : "collapsible-uncollapsed",
} as any)<{ isActive: boolean; maxHeight: number }>`
    overflow: hidden;
    max-height: ${(props) => (props.isActive ? `${props.maxHeight}px` : "0px")};
    transition: ${(props) =>
        props.isActive
            ? "max-height 0.5s ease-in-out"
            : "max-height 0.5s cubic-bezier(0, 1, 0, 1)"};
`;

/**
 * The collapsible toggle wrapper is in charge of aligning the
 * toggle border with other children (and other dropdown borders, such as the search border)
 */
export const PanelToggleWrapperStyled = styled.div`
    padding: 0;
    margin: 0 10px 0 0;
`;

/**
 * Contains style for the default collapser button
 * The collapser button is the component that is
 * in charge of triggering collapse/uncollapse of the collapsible.
 */
export const PanelToggleStyled = styled.div<{ hasTopBorder: boolean; disabled: boolean }>`
    font-size: 16px;
    height: 16px;
    font-family: ${fonts.$robotoFontFamily};
    font-weight: 400;
    color: #092540;
    padding: 15px 0 15px 0;
    letter-spacing: 0.7px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${(props) =>
        props.hasTopBorder && `box-shadow: inset 0 1px 0 0 ${colorsPalettes.carbon["50"]};`};
    ${(props) => props.disabled && "color: gray"};
`;
