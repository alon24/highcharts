import React from "react";
import { ILegendsComponent } from "./LegendsTypes";
import { useChartContext } from "../context/context";
import { LegendWithValue } from "@similarweb/ui-components/dist/legend";

const DEFAULT_LEGEND_COMPONENT = ({ legendItem }) => {
    const { label, checked = true, color } = legendItem;
    const { actions, legends } = useChartContext();
    const { setLegendItems } = actions;
    const { legendItems } = legends;
    const onLegendClick = (clickedLabel) => () => {
        const newLegendItems = legendItems.map((legendItem, index) => {
            return {
                ...legendItem,
                ...(legendItem.label === clickedLabel && { checked: !checked }),
            };
        });
        setLegendItems(newLegendItems);
    };
    return (
        <LegendWithValue
            onClick={onLegendClick(label)}
            text={label}
            isChecked={checked}
            labelColor={color}
        />
    );
};

export const Legends: ILegendsComponent = () => {
    const { legends } = useChartContext();
    const { LegendComponent = DEFAULT_LEGEND_COMPONENT, legendItems } = legends;
    return (
        <>
            {legendItems.map((legendItem) => {
                return <LegendComponent key="1" legendItem={legendItem} />;
            })}
        </>
    );
};
