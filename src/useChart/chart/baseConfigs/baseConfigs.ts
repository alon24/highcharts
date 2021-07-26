import { EChartType } from "../chartTypes";
import { baseAreaConfig } from "./baseAreaConfig";
import { baseDonutConfig } from "./baseDonutConfig";
import { basePieConfig } from "./basePieConfig";
import { baseBarConfig } from "./baseBarConfig";

const { AREA, BAR, DONUT, LINE, PIE } = EChartType;
export const baseConfigs = (chartData) => ({
    [AREA]: baseAreaConfig(chartData),
    [DONUT]: baseDonutConfig(chartData),
    [PIE]: basePieConfig(chartData),
    [BAR]: baseBarConfig(chartData),
});
