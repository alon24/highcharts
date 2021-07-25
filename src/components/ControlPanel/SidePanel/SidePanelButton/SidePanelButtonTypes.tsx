import { GraphType } from "../../../../AppTypes";

export interface ISidePanelButtonProps {
    graphType: GraphType;
    imageSrc: string;
    imageSelectedSrc: string;
    altText: string;
    isActive: boolean;
    onClick: (graphType: GraphType) => void;
}
