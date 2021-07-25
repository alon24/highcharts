import { EChartType } from "../chartTypes";
import { baseAreaConfig } from "./baseAreaConfig";
import { baseDonutConfig } from "./baseDonutConfig";

const { AREA, BAR, DONUT, LINE, PIE } = EChartType;
export const baseConfigs = (chartData) => ({
    [AREA]: baseAreaConfig(chartData),
    [DONUT]: baseDonutConfig(chartData),
});
