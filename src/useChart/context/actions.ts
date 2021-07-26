import { ICartActions } from "./contextTypes";

export const getActions = (state, setState) => {
    return {
        setLegendItems: (legendItems) =>
            setState({
                ...state,
                legends: { ...state.legends, legendItems },
            }),
    };
};
