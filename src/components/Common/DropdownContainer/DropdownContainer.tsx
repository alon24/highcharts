import {
    Dropdown,
    IDropdownChild,
    IDropdownItem,
    IDropdownProps,
} from "@similarweb/ui-components/dist/dropdown";
import React, { ReactElement } from "react";
import dropdownHelper from "./dropdownHelper";

export interface IDropdownContainerProps extends IDropdownProps<any> {
    showCountryFlag?: boolean;
    initialSelection?: { [key: string]: boolean };
    hasSearch?: boolean;
    virtualize?: boolean;
}

export class DropdownContainer extends React.PureComponent<
    IDropdownContainerProps,
    {
        buttonText: string;
        selectedIds: { [key: string]: boolean };
    }
> {
    public static defaultProps = {
        initialSelection: {},
        buttonText: "Please Select",
        shouldScrollToSelected: false,
        dropdownPopupMinScrollHeight: 42,
        virtualize: false,
    };

    public constructor(props) {
        super(props);
        this.state = {
            selectedIds: props.initialSelection,
            buttonText: this.getInitialSelectionChildText(),
        };
    }

    public render() {
        const clonedContent = [
            React.cloneElement(
                this.dropdownButton,
                {
                    key: "dropdown-button",
                    countryId: Object.keys(this.state.selectedIds)[0],
                },
                this.state.buttonText,
            ),
            ...this.dropdownChildren,
        ];
        return (
            <div style={{ width: "320px", height: "500px" }}>
                <Dropdown
                    selectedIds={this.state.selectedIds}
                    shouldScrollToSelected={this.props.shouldScrollToSelected}
                    dropdownPopupMinScrollHeight={this.props.dropdownPopupMinScrollHeight}
                    onClick={this.onClick}
                    virtualize={!!this.props.virtualize}
                    {...this.props}
                >
                    {clonedContent}
                </Dropdown>
            </div>
        );
    }

    public onClick = (newItem) => {
        this.setState({
            selectedIds: { [newItem.id]: true },
            buttonText: newItem.children,
        });
    };

    private get dropdownButton(): ReactElement {
        return this.props.children[0] as ReactElement;
    }

    private get dropdownChildren(): IDropdownChild[] {
        // Skip the first child, since its the dropdown button
        return (this.props.children as IDropdownChild[]).slice(1);
    }

    private get initialSelectionItemId(): string {
        // We assume that initial selection has one key. in case it has more - we ignore the rest.
        const initialSelectionKeys = Object.keys(this.props.initialSelection);
        return initialSelectionKeys[0] || null;
    }

    private getInitialSelectionChildText = (): string => {
        const initialSelectionId = this.initialSelectionItemId;

        // Try to fetch the selected item from the dropdown children.
        // In case no child was found for the provided id, or no id was provided
        // use the dropdown button text instead.
        let selectedItem = this.findDropdownChildById(this.dropdownChildren, initialSelectionId);
        selectedItem = selectedItem || this.dropdownButton;

        const itemText = this.getDropdownItemText(selectedItem);
        return itemText;
    };

    /**
     * Searches recursivley within the given list of drop down children for an item with
     * the given id.
     */
    private findDropdownChildById = (items: IDropdownChild[], itemId: string): IDropdownChild => {
        if (!itemId) {
            return null;
        }

        // Flattern the list of items. this is done in case where we have nested children.
        const flatternedItems = dropdownHelper.flatternDropdownChildren(items);

        const selectedItem = flatternedItems.find((child) => {
            const childId = dropdownHelper.getDropdownChildId(child);
            return childId === itemId;
        });

        return selectedItem;
    };

    /**
     * Returns the drop down child text. this can either be a text element or text prop
     * in case the dropdown child is a nested child - we avoid returning any data
     * (since a nested child has no text of its own)
     */
    private getDropdownItemText = (item: IDropdownChild): string => {
        // Sanity, shouldn't happen - in case a nested
        // child was provided, avoid returning its text (such item has no text)
        const isNested = dropdownHelper.isNestedDropdownChild(item);
        if (isNested) {
            return null;
        }

        const childText = (item as IDropdownItem).text || (item as ReactElement).props.children;

        return childText;
    };
}
