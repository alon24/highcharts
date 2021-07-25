import React from "react";
import { GraphType, TabType } from "../AppTypes";

const noopFunc = () => void 0;

export interface IAppContext {
    panelTab: TabType;
    graphType: GraphType;
    is3DGraph: boolean;
    setPanelTab: (tab: TabType) => void;
    setGraphType: (type: GraphType) => void;
    setIs3DGraph: (is3d: boolean) => void;
}

export const AppContext = React.createContext<IAppContext>({
    panelTab: "Design",
    graphType: "Pie",
    is3DGraph: false,
    setPanelTab: noopFunc,
    setGraphType: noopFunc,
    setIs3DGraph: noopFunc,
});
