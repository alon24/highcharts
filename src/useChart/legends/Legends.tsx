import React from "react";
import { ILegendsComponent } from "./LegendsTypes";
import { useChartContext } from "../context/context";

const DEFAULT_LEGEND_COMPONENT = ({ legendItem }) => <h1>{legendItem.label}</h1>;

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
