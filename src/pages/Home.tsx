import React, { useState } from "react";
import styled from "styled-components/macro";
import { Wrapper } from "../components/styles";
import { Editor } from "../components/Editor";
import { Display } from "../components/Display";
import { GraphConfigPanel } from "../components/GraphConfigPanel";
import { TypesComponent } from "../components/typesComponent";
import { IconSidebar, IconSidebarItem } from "@similarweb/ui-components/dist/icon-sidebar";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    //align-items: center;
    color: black;
    width: 100%;
`;

export const Home: React.FC<any> = () => {
    const [data, setData] = useState("");

    function handleChange(data: string) {
        setData(JSON.parse(data));
    }

    return (
        <React.Fragment>
            <Container>
                <IconSidebar>
                    <IconSidebarItem title={"Donut"} icon={"apps"} />
                    <IconSidebarItem title={"Bar"} icon={"apps"} />
                    <IconSidebarItem title={"Kuku"} icon={"apps"} />
                </IconSidebar>
                <Wrapper>
                    <TypesComponent />
                    <Wrapper flexDirection={"rows"}>
                        <GraphConfigPanel />
                        <Display data={data} />
                    </Wrapper>
                    {/*<Editor onChange={handleChange} />*/}
                </Wrapper>
            </Container>
        </React.Fragment>
    );
};
