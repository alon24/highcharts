import { GraphType } from "../../AppTypes";

export interface IControlPanelProps {
    selectedGraphType: GraphType;
    onSelectGraphType: (type: GraphType) => void;
}
