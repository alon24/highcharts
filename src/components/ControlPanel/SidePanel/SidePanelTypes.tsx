import { GraphType } from "../../Main/MainTypes";

export interface ISidePanelProps {
    onSelectGraphType: (type: GraphType) => void;
    selectedGraphType: GraphType;
}
