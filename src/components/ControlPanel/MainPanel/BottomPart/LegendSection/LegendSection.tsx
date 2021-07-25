import { PanelSection } from "../../../../Common/PanelSection/PanelSection";

export const LegendSection = (props: { isOpen: boolean; onToggle: (isOpen: boolean) => void }) => {
    return <PanelSection text={"Legend"} isOpened={props.isOpen} onToggle={props.onToggle} />;
};
