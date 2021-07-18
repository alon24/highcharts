import React, { useState } from "react";
import styled from "styled-components/macro";
import { Home } from "./pages/Home";
import styles from "./styles/globale";
import { Display } from "./components/Display";
import { Wrapper, Text } from "./components/styles";
import { Editor, IEditor } from "./components/Editor";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    background-color: #131a22;
`;

const App: React.FC = () => {
    const [data, setData] = useState("");

    function handleChange(data: string) {
        setData(JSON.parse(data));
    }

    return (
        <>
            <Container>
                <Wrapper alignItems="center">
                    <h1>Demo1</h1>
                    <Editor onChange={handleChange} />
                    <Display data={data} />
                </Wrapper>
            </Container>
        </>
    );
};
export default App;