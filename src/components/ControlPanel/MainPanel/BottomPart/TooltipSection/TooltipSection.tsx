import { PanelSection } from "../../../../Common/PanelSection/PanelSection";

export const TooltipSection = (props: { isOpen: boolean; onToggle: (isOpen: boolean) => void }) => {
    return <PanelSection text={"Tooltip"} isOpened={props.isOpen} onToggle={props.onToggle} />;
};
