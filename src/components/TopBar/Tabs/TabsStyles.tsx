import styled from "styled-components";
import { fonts } from "@similarweb/styles";

export const TabsContainer = styled.div`
    width: 408px;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TabContainer = styled.div<{ isActive: boolean }>`
    width: 204px;
    height: 48px;
    border-bottom: 1px solid;
    border-bottom: ${({ isActive }) => (isActive ? "2px solid #3E74FE" : "1px solid #6B7C8C")};
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }

    span {
        color: ${({ isActive }) => (isActive ? "#3E74FE" : "#6B7C8C")};
        font-size: 14px;
        font-family: ${fonts.$robotoFontFamily};
        font-weight: 700;
    }
`;
