import {
    IDropdownChild,
    IDropdownItem,
    INestedDropdownItem,
} from "@similarweb/ui-components/dist/dropdown";
import classNames from "classnames";
import * as _ from "lodash";
import React, { ReactElement, ReactNode } from "react";
import { SyntheticEvent } from "react";

/**
 * Checks if the current dropdown item is a nested item. a nested dropdown item
 * contains dropdown items of its own.
 */
const isNestedDropdownChild = (child: any): child is INestedDropdownItem => {
    return child.props && "isNested" in child.props;
};

/**
 * Clones the given children and augments them with the given properties
 * this is used by the dropdown container and nested drop down children
 * for expanding their children with important dropdown functionality
 * @param children The dropdown children to clone and augment
 * @param activeId The currently active dropdown item id
 * @param selectedIds The list of all selected item ids within the dropdown
 * @param defaultOnClick Default on click to be used when clicking on each of the dropdown items
 * @param customOnClick
 * Custom on click to be used when clicking on dropdown items that have a special flag property
 * called 'preventDefault'
 * @param onHover onMouseOver callback for dropdown items
 * @param searchFilter
 * Search filter logic that is used to filter out dropdown children
 * should be used on nested dropdown children (children that contain other children)
 * @param searchTerm
 * The search term to be applied within the search filter function
 */
const renderDropdownElements = (
    children: ReactNode,
    activeId?: string | number,
    selectedIds?: any,
    defaultOnClick?: (event: SyntheticEvent, itemOverride: ReactElement) => void,
    customOnClick?: (event: SyntheticEvent, item: ReactElement) => void,
    onHover?: (item) => void,
    searchFilter?: (term: string, item: IDropdownChild) => boolean,
    searchTerm?: string,
): React.ReactElement[] => {
    const items = React.Children.map(children, (item: ReactElement) => {
        return React.cloneElement(item, {
            key: item.props.id,
            activeId,
            selectedIds,
            active: item.props.id && activeId === item.props.id.toString(),
            selected: selectedIds[item.props.id],
            className: classNames(item.props.className, {
                "DropdownItem--selected": item.props.selected,
            }),
            onClick: item.props.preventDefault
                ? (e: SyntheticEvent) => customOnClick(e, item)
                : (e: SyntheticEvent, itemOverride: ReactElement = item) =>
                      defaultOnClick(e, itemOverride),
            onMouseOver: () => (item.props.id ? onHover(item.props) : _.noop()),
            searchFilter,
            searchTerm,
        });
    });

    return items;
};

/**
 * Retrieves nested children list from a nestedDropdownChild
 * @param child - The nested dropdown child
 */
const getDropdownItemChildren = (child: IDropdownChild): IDropdownChild[] => {
    // In case the dropdown child is non-nested, then it has no dropdown children
    const isNested = isNestedDropdownChild(child);
    if (!isNested) {
        return null;
    }

    const children =
        (child as INestedDropdownItem).children || (child as ReactElement).props.children;

    return children;
};

/**
 * Given a list of dropdown items - runs recursivley on each of the children and extracts
 * nested children (in case nested dropdown items are present in this list)
 */
const flatternDropdownChildren = (items: IDropdownChild[]): IDropdownChild[] => {
    const spreadItems = items.map((currItem) => {
        const isNested = isNestedDropdownChild(currItem);

        return isNested ? flatternDropdownChildren(getDropdownItemChildren(currItem)) : currItem;
    });

    return spreadItems.flat(Infinity);
};

/**
 * Returns the dropdown item id
 */
const getDropdownChildId = (item: IDropdownChild): string => {
    const childId = (item as IDropdownItem).id || (item as ReactElement).props.id;
    return childId;
};

export default {
    renderDropdownElements,
    getDropdownItemChildren,
    flatternDropdownChildren,
    isNestedDropdownChild,
    getDropdownChildId,
};
