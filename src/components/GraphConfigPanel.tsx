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
    const [isOpened, setIsOpened] = useState(true);

    function onTransitionEnd(evt: TransitionEvent) {
        console.log("transition ended", evt);
    }

    function handleOpen() {
        setIsOpened(!isOpened);
    }
    return (
        <Container>
            <CollapsibleToggle isActive={isOpened} text={"Title"} onClick={handleOpen} />
            <Collapsible isActive={isOpened} onTransitionEnd={onTransitionEnd}>
                <ul>
                    <li>test1</li>
                    <li>test2</li>
                    <li>test3</li>
                </ul>
            </Collapsible>
            <CollapsibleToggle isActive={isOpened} text={"Legend"} onClick={handleOpen} />
            <Collapsible isActive={isOpened} onTransitionEnd={onTransitionEnd}>
                <ul>
                    <li>test1</li>
                    <li>test2</li>
                    <li>test3</li>
                </ul>
            </Collapsible>
            <CollapsibleToggle isActive={isOpened} text={"Graph"} onClick={handleOpen} />
            <Collapsible isActive={isOpened} onTransitionEnd={onTransitionEnd}>
                <ul>
                    <li>test1</li>
                    <li>test2</li>
                    <li>test3</li>
                </ul>
            </Collapsible>
            <CollapsibleToggle isActive={isOpened} text={"3D"} onClick={handleOpen} />
            <Collapsible isActive={isOpened} onTransitionEnd={onTransitionEnd}>
                <ul>
                    <li>test1</li>
                    <li>test2</li>
                    <li>test3</li>
                </ul>
            </Collapsible>
        </Container>
    );
};
