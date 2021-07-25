import { Collapsible, CollapsibleToggle } from "@similarweb/ui-components/dist/collapsible/";
import styled from "styled-components/macro";
import { useState } from "react";
import { TypesComponent } from "./typesComponent";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const GraphConfigPanel = () => {
    const [isOpened, setIsOpened] = useState({
        title: true,
        legend: true,
        graph: true,
        threeD: true,
    });

    function onTransitionEnd(evt: TransitionEvent) {
        console.log("transition ended", evt);
    }

    function handleOpen(evt: any) {
        console.log(evt);
        // setIsOpened(!isOpened);
    }
    return (
        <Container>
            <CollapsibleToggle isActive={isOpened.title} text={"Title"} onClick={handleOpen} />
            <Collapsible isActive={isOpened.title} onTransitionEnd={onTransitionEnd}>
                <ul>
                    <li>text</li>
                    <li>period</li>
                    <li>counting</li>
                    <li>I cannot read the english!!</li>
                    <li>toolitp</li>
                </ul>
            </Collapsible>
            <CollapsibleToggle isActive={isOpened.legend} text={"Legend"} onClick={handleOpen} />
            <Collapsible isActive={isOpened.legend} onTransitionEnd={onTransitionEnd}>
                <ul>
                    <li>Has Icon</li>
                </ul>
            </Collapsible>
            <CollapsibleToggle isActive={isOpened.graph} text={"Graph"} onClick={handleOpen} />
            <Collapsible isActive={isOpened.graph} onTransitionEnd={onTransitionEnd}>
                <ul>
                    <li>do do do</li>
                    <li>gap</li>
                </ul>
            </Collapsible>
            <CollapsibleToggle isActive={isOpened.threeD} text={"3D"} onClick={handleOpen} />
            <Collapsible isActive={isOpened.threeD} onTransitionEnd={onTransitionEnd}>
                <ul>
                    <li>test1</li>
                    <li>test2</li>
                    <li>test3</li>
                </ul>
            </Collapsible>
        </Container>
    );
};
