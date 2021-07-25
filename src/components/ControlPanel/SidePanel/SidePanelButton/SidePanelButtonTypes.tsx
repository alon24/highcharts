import { GraphType } from "../../../Main/MainTypes";

export interface ISidePanelButtonProps {
    graphType: GraphType;
    imageSrc: any;
    isActive: boolean;
    onClick: (graphType: GraphType) => void;
}
