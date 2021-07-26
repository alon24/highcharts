import { PanelSection } from "../../../../Common/PanelSection/PanelSection";
import { HeaderSectionContainer, InputContainer } from "./HeaderSectionStyles";
import { Textfield } from "@similarweb/ui-components/dist/textfield";
import { Textarea } from "@similarweb/ui-components/dist/textarea";
import { useAppContext } from "../../../../../AppContext/AppContext";

export const HeaderSection = (props: { isOpen: boolean; onToggle: (isOpen: boolean) => void }) => {
    const { chartTooltip, setTooltip, chartTitle, setChartTitle } = useAppContext();
    return (
        <PanelSection text={"Header"} isOpened={props.isOpen} onToggle={props.onToggle}>
            <HeaderSectionContainer>
                <InputContainer>
                    <p>Chart Title</p>
                    <Textfield
                        defaultValue={chartTitle}
                        placeholder={"Chart title"}
                        onChange={(text) => setChartTitle(text)}
                    />
                </InputContainer>
                <InputContainer>
                    <p>Info Tooltip</p>
                    <Textarea
                        placeholder={"Info tooltip"}
                        value={chartTooltip}
                        onChange={(text) => setTooltip(text)}
                    />
                </InputContainer>
            </HeaderSectionContainer>
        </PanelSection>
    );
};
