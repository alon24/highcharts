import React, { FC, useCallback } from "react";
import { Title } from "../../../Common/Title/Title";
import { Tabs } from "../../../TopBar/Tabs/Tabs";
import { DataSelectionContainer, TitleContainer, TopPartContainer } from "./TopPartStyles";
import { OnOffSwitch } from "@similarweb/ui-components/dist/on-off-switch";
import {
    DropdownButton,
    Dropdown,
    SimpleDropdownItem,
} from "@similarweb/ui-components/dist/dropdown";
import { useContext } from "react";
import { AppContext } from "../../../../AppContext/AppContext";
import { Switch3D } from "./Components/Switch3D";
import { DataSetDropdown } from "./Components/DataSetDropdown";
import { SeriesCounter } from "./Components/SeriesCounter";
import { DataSet } from "../../../../AppTypes";

export const TopPart: React.FunctionComponent = () => {
    const {
        is3DGraph,
        setIs3DGraph,
        dataSet,
        setDataSet,
        seriesCount,
        setSeriesCount,
    } = useContext(AppContext);

    const dataSetOptions = ["Gender", "Traffic"] as DataSet[];

    return (
        <TopPartContainer>
            <TitleContainer>
                <Title text={"Chart Type"} />
            </TitleContainer>
            <Switch3D is3DGraph={is3DGraph} onSetIs3DGraph={() => setIs3DGraph(!is3DGraph)} />
            <DataSelectionContainer>
                <DataSetDropdown
                    selectedDataSet={dataSet}
                    onSelectDataSet={(dataSet) => setDataSet(dataSet)}
                    options={dataSetOptions}
                />
                <SeriesCounter
                    seriesCount={seriesCount}
                    onSetSeriesCount={(count) => setSeriesCount(count)}
                    maxAllowedCount={5}
                />
            </DataSelectionContainer>
        </TopPartContainer>
    );
};
