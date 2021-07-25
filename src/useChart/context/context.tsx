import React, { useContext } from "react";
import { IChartContext } from "./contextTypes";

const ChartContext = React.createContext<IChartContext>(null);

export const useChartContext = (): IChartContext => useContext(ChartContext);

// eslint-disable-next-line react/display-name
export const getChartContextProvider = (chartContextInitialValue) => ({ children }) => {
    return (
        <ChartContext.Provider value={chartContextInitialValue}>{children}</ChartContext.Provider>
    );
};
