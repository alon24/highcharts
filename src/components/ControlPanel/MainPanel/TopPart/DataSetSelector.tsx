import {
    DropdownButton,
    Dropdown,
    SimpleDropdownItem,
} from "@similarweb/ui-components/dist/dropdown";
import { DataSet } from "../../../../AppTypes";
import { DropdownContainer } from "../../../Common/DropdownContainer/DropdownContainer";
import { DataSelectorContainer } from "./TopPartStyles";

export const DataSetSelector = (props: {
    selectedDataSet: DataSet;
    onSelectDataSet: (dataSet: DataSet) => void;
    options: DataSet[];
}) => {
    const { selectedDataSet, onSelectDataSet, options } = props;

    const optionElements = options.map((option) => {
        return (
            <SimpleDropdownItem key={option} id={option} selected={option === selectedDataSet}>
                {option}
            </SimpleDropdownItem>
        );
    });

    const dropdownItems = [
        <DropdownButton key={"button"} width={173} cssClass={"dropdownButton"}>
            {selectedDataSet}
        </DropdownButton>,
        ...optionElements,
    ];

    return (
        <DataSelectorContainer>
            <Dropdown
                dropdownPopupPlacement={"ontop-left"}
                onClick={({ id }) => onSelectDataSet(id)}
            >
                {dropdownItems}
            </Dropdown>
        </DataSelectorContainer>
    );
};
