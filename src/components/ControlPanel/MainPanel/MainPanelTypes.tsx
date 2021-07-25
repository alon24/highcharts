import { TabType } from "../../../AppTypes";

export interface IMainPanelProps {
    selectedTab: TabType;
    onSelectTab: (tab: TabType) => void;
}
