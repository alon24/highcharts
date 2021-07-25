import { GraphType } from "../Main/MainTypes";

export interface IControlPanelProps {
    selectedGraphType: GraphType;
    onSelectGraphType: (type: GraphType) => void;
}
