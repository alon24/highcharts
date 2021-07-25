import styled from "styled-components/macro";
import { PageItemWrapper as NavItemWrapper } from "../../helpers/ItemWrapper";

// export const Text = styled(NavText)`
//     color: ${(props) => (props.color ? props.color : "#ffffff")};
//     font-size: ${(props) => (props.fontSize ? props.fontSize : ".9em")};
// `;

export const Wrapper = styled(NavItemWrapper)`
    display: flex;
    flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : "column")};
    align-items: ${(props) => (props.alignItems ? props.alignItems : "flex-start")};
    padding: 0.1em;
    cursor: pointer;
    //border: 1px solid #131a22;
    flex: 1;

    //&:hover {
    //    border: 1px solid #ffffff;
    //    border-radius: 0.2em;
    //}
    //@media (max-width: 850px) {
    //    display: none;
    //}
`;
// Wrapper.displayName = "ObjectWrapper";
