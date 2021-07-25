import React, { FC } from "react";
import styled from "styled-components";
import { fonts } from "@similarweb/styles";

interface ITitleProps {
    text: string;
}

const TitleWrapper = styled.span`
    color: #092540;
    font-size: 20px;
    font-weight: 500;
    font-family: ${fonts.$robotoFontFamily};
`;

export const Title: FC<ITitleProps> = (props) => {
    return <TitleWrapper>{props.text}</TitleWrapper>;
};
