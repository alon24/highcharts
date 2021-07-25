import React, { useState } from "react";
import styled from "styled-components/macro";
import { Wrapper } from "../components/styles";
import { Editor } from "../components/Editor";
import { Display } from "../components/Display";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    background-color: #131a22;
`;

export const Home: React.FC<any> = () => {
    const [data, setData] = useState("");

    function handleChange(data: string) {
        setData(JSON.parse(data));
    }

    return (
        <React.Fragment>
            <Container>
                <Wrapper alignItems="center">
                    <h1>Demo1</h1>
                    {/*<Editor onChange={handleChange} />*/}
                    {/*<Display data={data} />*/}
                </Wrapper>
            </Container>
        </React.Fragment>
    );
};
