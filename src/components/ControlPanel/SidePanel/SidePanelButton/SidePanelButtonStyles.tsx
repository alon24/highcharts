import styled from "styled-components";

export const ButtonContainer = styled.div<{ isActive: boolean }>`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ isActive }) => (isActive ? "#3E74FE" : "#f7f7f8;")};
    transition: background-color 200ms;

    &:hover {
        background-color: ${({ isActive }) => (isActive ? "#94B2FE" : "#cbd1d7")};
    }
`;

export const ButtonImage = styled.img`
    width: 32px;
    height: 32px;
`;
