import { noLegends } from "./configItems/noLegends";
import { noTooltip } from "./configItems/noTooltip";

export const baseConfig = {
    ...noLegends,
    ...noTooltip,
    chart: {
        zoomType: "x",
    },
    credits: {
        enabled: false,
    },
    exporting: {
        enabled: false,
    },
    yAxis: {
        title: {
            text: null,
        },
    },
    title: {
        style: {
            display: "none",
        },
    },
};
