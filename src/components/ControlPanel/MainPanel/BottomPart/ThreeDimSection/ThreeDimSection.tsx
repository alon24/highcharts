import { PanelSection } from "../../../../Common/PanelSection/PanelSection";

export const ThreeDimSection = (props: {
    isOpen: boolean;
    onToggle: (isOpen: boolean) => void;
}) => {
    return <PanelSection text={"3D"} isOpened={props.isOpen} onToggle={props.onToggle} />;
};
