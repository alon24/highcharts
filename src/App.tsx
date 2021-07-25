import React from "react";
import styled from "styled-components/macro";
import { Consumer, ConsumerB } from "../src/Consumer/Consumer";
import { Main } from "./components/Main/Main";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    background-color: #131a22;
`;

export const App: React.FC = () => {
    return <Main />;
    // return (
    //     <>
    //         <Consumer />
    //         <br />
    //         <br />
    //         <ConsumerB />
    //     </>
    // );
};
