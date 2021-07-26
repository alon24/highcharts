import { donut } from "./donut";
import { EChartType } from "../../useChart/chart/chartTypes";
import { area } from "./area";
import { bar } from "./bar";

const { AREA, BAR, DONUT, LINE, PIE } = EChartType;

export const mockData = {
    [DONUT]: donut,
    [AREA]: area,
    [PIE]: donut,
    [BAR]: bar,
};
