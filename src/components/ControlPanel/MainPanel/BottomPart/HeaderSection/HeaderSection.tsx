import { PanelSection } from "../../../../Common/PanelSection/PanelSection";

export const HeaderSection = (props: { isOpen: boolean; onToggle: (isOpen: boolean) => void }) => {
    return <PanelSection text={"Header"} isOpened={props.isOpen} onToggle={props.onToggle} />;
};
