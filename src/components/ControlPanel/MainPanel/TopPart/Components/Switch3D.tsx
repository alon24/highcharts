import { OnOffSwitch } from "@similarweb/ui-components/dist/on-off-switch";
import { SwitchContainer } from "../TopPartStyles";

export const Switch3D = (props: { is3DGraph: boolean; onSetIs3DGraph(is3d: boolean) }) => {
    const { is3DGraph, onSetIs3DGraph } = props;

    return (
        <SwitchContainer>
            <OnOffSwitch isSelected={is3DGraph} onClick={() => onSetIs3DGraph(!is3DGraph)} />
            <span>{"3D Graph"}</span>
        </SwitchContainer>
    );
};
