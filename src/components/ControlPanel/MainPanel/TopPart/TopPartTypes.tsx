import { TabType } from "../../../../AppTypes";

export interface ITopPartProps {
    selectedTab: TabType;
    onSelectTab: (tab: TabType) => void;
}
