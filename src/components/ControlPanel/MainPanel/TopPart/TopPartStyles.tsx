import styled from "styled-components";
import { Title } from "../../../Common/Title/Title";

export const TopPartContainer = styled.div`
    width: 408px;
    border-bottom: 1px solid #cbd1d7;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const TitleContainer = styled.div`
    margin: 40px 0 40px 40px;
`;

export const SwitchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 0 24px 40px;
    span {
        color: #6b7c8c;
        font-size: 16px;
        font-weight: 400;
        margin-left: 10px;
    }
`;

export const DataSelectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 27px 40px 40px;
`;

export const DataSetDropdownContainer = styled.div`
    width: 173px;
    margin-right: 23px;

    .dropdownButton {
        background-color: white;
    }
`;

export const SeriesCounterContainer = styled.div`
    height: 24px;
    width: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #6b7c8c;
    font-size: 16px;
    font-weight: 400;

    span {
        margin: 0 8px;
    }
`;

export const SeriesCounterButtonContainer = styled.div`
    display: flex;
    height: 24px;
    width: 24px;
    color: #6b7c8c;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid #e9ebed;
    border-radius: 3px;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;
