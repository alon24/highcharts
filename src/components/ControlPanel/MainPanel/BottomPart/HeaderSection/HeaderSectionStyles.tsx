import styled from "styled-components/macro";
import { fonts } from "@similarweb/styles";

export const HeaderSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${fonts.$robotoFontFamily};
    font-size: 12px;
`;

export const ButtonsSwitchContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-family: ${fonts.$robotoFontFamily};
    font-size: 16px;
    align-items: center;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-family: ${fonts.$robotoFontFamily};
    font-size: 12px;
    margin: 10px 0;
`;
