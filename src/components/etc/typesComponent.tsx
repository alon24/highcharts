import { ButtonPrimary, IconButton } from "@similarweb/ui-components/dist/button";
import { OnOffSwitch } from "@similarweb/ui-components/dist/on-off-switch";
import styled from "styled-components/macro";
import { Wrapper } from "./styles";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 1rem;
`;

const ToggleContainer = styled.div`
    display: flex;
    margin-left: 1rem;
    align-items: center;
    p {
        margin-right: 0.25rem;
    }
`;

const TypeNav = styled.div`
    display: flex;
`;

export const TypesComponent = () => {
    function handleClick(evt: any) {
        console.log(evt);
    }

    return (
        <Container>
            <TypeNav>
                <IconButton type="primary" iconName="download" placement={"right"}>
                    Dounut
                </IconButton>
                <IconButton type="primary" iconName="download" placement={"right"}>
                    Bar
                </IconButton>
                <IconButton
                    type="primary"
                    iconName="download"
                    placement={"right"}
                    onClick={handleClick}
                >
                    Line
                </IconButton>
                <ToggleContainer>
                    <p>3D:</p>
                    <OnOffSwitch onClick={handleClick} isSelected={true} />
                </ToggleContainer>
            </TypeNav>
        </Container>
    );
};
