import { GraphType, TabType } from "../../AppTypes";

export interface IControlPanelProps {
    selectedGraphType: GraphType;
    onSelectGraphType: (type: GraphType) => void;

    selectedTab: TabType;
    onSelectTab: (tab: TabType) => void;
}
