import { GraphType } from "../../../AppTypes";

export interface ISidePanelProps {
    onSelectGraphType: (type: GraphType) => void;
    selectedGraphType: GraphType;
}
