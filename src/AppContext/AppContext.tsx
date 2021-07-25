import React from "react";
import { DataSet, GraphType, TabType } from "../AppTypes";

const noopFunc = () => void 0;

export interface IAppContext {
    panelTab: TabType;
    graphType: GraphType;
    is3DGraph: boolean;
    dataSet: DataSet;
    setPanelTab: (tab: TabType) => void;
    setGraphType: (type: GraphType) => void;
    setIs3DGraph: (is3d: boolean) => void;
    setDataSet: (dataSet: DataSet) => void;
}

export const AppContext = React.createContext<IAppContext>({
    panelTab: "Design",
    graphType: "Pie",
    is3DGraph: false,
    dataSet: "Gender",
    setDataSet: noopFunc,
    setPanelTab: noopFunc,
    setGraphType: noopFunc,
    setIs3DGraph: noopFunc,
});
