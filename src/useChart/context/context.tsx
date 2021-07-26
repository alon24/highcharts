import React, { useContext, useState } from "react";
import { IChartContext } from "./contextTypes";
import { getActions } from "./actions";

const ChartContext = React.createContext<IChartContext>(null);

export const useChartContext = (): IChartContext => useContext(ChartContext);

// eslint-disable-next-line react/display-name
export const getChartContextProvider = (chartContextInitialValue) => ({ children }) => {
    const [state, setState] = useState(chartContextInitialValue);
    const chartContextValue = {
        ...state,
        actions: getActions(state, setState),
    };
    return <ChartContext.Provider value={chartContextValue}>{children}</ChartContext.Provider>;
};
