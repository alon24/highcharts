import React, { useState } from "react";
import styled from "styled-components/macro";
import { IconSidebar, IconSidebarItem } from "@similarweb/ui-components/dist/icon-sidebar";
import { ControlPanel } from "../components/ControlPanel/ControlPanel";
import { Main } from "../components/Main/Main";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    //align-items: center;
    color: black;
    width: 100%;
`;

export const Home: React.FC<any> = () => {
    return <Main />;

    // return (
    //     <React.Fragment>
    //         <Container>
    //             <IconSidebar>
    //                 <IconSidebarItem title={"Donut"} icon={"apps"} />
    //                 <IconSidebarItem title={"Bar"} icon={"apps"} />
    //                 <IconSidebarItem title={"Kuku"} icon={"apps"} />
    //             </IconSidebar>
    //             <Wrapper>
    //                 <TypesComponent />
    //                 <Wrapper flexDirection={"rows"}>
    //                     <GraphConfigPanel />
    //                     <Display data={data} />
    //                 </Wrapper>
    //                 {/*<Editor onChange={handleChange} />*/}
    //             </Wrapper>
    //         </Container>
    //     </React.Fragment>
    // );
};
