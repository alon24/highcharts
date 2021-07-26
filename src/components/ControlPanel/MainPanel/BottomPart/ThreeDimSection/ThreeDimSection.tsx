import { PanelSection } from "../../../../Common/PanelSection/PanelSection";
import { SlidebarContainer, ThreeDSectionContainer } from "./ThreeDimSectionStyles";
import { SliderWrapper, Slider, SliderTitle } from "@similarweb/ui-components/dist/slider";
import { useAppContext } from "../../../../../AppContext/AppContext";

export const ThreeDimSection = (props: {
    isOpen: boolean;
    onToggle: (isOpen: boolean) => void;
    disabled: boolean;
}) => {
    const {
        alphaAngle,
        setAlphaAngle,
        betaAngle,
        setBetaAngle,
        depth,
        setDepth,
        is3DGraph,
    } = useAppContext();
    return (
        <PanelSection
            text={"3D"}
            isOpened={props.isOpen}
            disabled={!is3DGraph}
            onToggle={(toggleState) => !props.disabled && props.onToggle(toggleState)}
        >
            <ThreeDSectionContainer>
                <SlidebarContainer>
                    <Slider
                        min={0}
                        max={100}
                        value={alphaAngle}
                        onChange={(val) => setAlphaAngle(val)}
                        description={`${alphaAngle || 0}%`}
                        title="Alpha Angle"
                    />
                </SlidebarContainer>
                <SlidebarContainer>
                    <Slider
                        min={0}
                        max={100}
                        value={betaAngle}
                        onChange={(val) => setBetaAngle(val)}
                        description={`${betaAngle || 0}%`}
                        title="Beta Angle"
                    />
                </SlidebarContainer>
                <SlidebarContainer>
                    <Slider
                        min={0}
                        max={100}
                        value={depth || 0}
                        onChange={(val) => setDepth(val)}
                        description={`${depth || 0}%`}
                        title="Depth"
                    />
                </SlidebarContainer>
            </ThreeDSectionContainer>
        </PanelSection>
    );
};
