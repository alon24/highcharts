import React from "react";
import styled from "styled-components/macro";
import { Consumer, ConsumerB } from "../src/Consumer/Consumer";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    background-color: #131a22;
`;

export const App: React.FC = () => {
    return (
        <>
            <Consumer />
            <br />
            <br />
            <ConsumerB />
        </>
    );
};
