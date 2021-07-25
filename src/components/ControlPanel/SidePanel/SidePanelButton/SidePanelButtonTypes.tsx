import { GraphType } from "../../../Main/MainTypes";

export interface ISidePanelButtonProps {
    graphType: GraphType;
    imageSrc: string;
    altText: string;
    isActive: boolean;
    onClick: (graphType: GraphType) => void;
}
