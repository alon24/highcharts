import React, { FC } from "react";
import styled from "styled-components";

interface ITitleProps {
    text: string;
}

const TitleWrapper = styled.span`
    color: #092540;
    font-size: 20px;
    font-weight: 500;
`;

export const Title: FC<ITitleProps> = (props) => {
    return <TitleWrapper>{props.text}</TitleWrapper>;
};
