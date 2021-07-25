import { PanelSection } from "../../../../Common/PanelSection/PanelSection";

export const GraphSection = (props: { isOpen: boolean; onToggle: (isOpen: boolean) => void }) => {
    return <PanelSection text={"Graph"} isOpened={props.isOpen} onToggle={props.onToggle} />;
};
