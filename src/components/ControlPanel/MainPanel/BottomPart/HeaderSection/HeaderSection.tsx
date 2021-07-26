import { PanelSection } from "../../../../Common/PanelSection/PanelSection";
import {
    ButtonsContainer,
    ButtonsSwitchContainer,
    HeaderSectionContainer,
    InputContainer,
} from "./HeaderSectionStyles";
import { Textfield } from "@similarweb/ui-components/dist/textfield";
import { Textarea } from "@similarweb/ui-components/dist/textarea";
import { useAppContext } from "../../../../../AppContext/AppContext";
import { LegendWithValue } from "@similarweb/ui-components/dist/legend";
import { OnOffSwitch } from "@similarweb/ui-components/dist/on-off-switch";
import { useState } from "react";

export const HeaderSection = (props: { isOpen: boolean; onToggle: (isOpen: boolean) => void }) => {
    const {
        graphType,
        seriesCount,
        is3DGraph,
        setIsExcel,
        setIsPng,
        setIsDashboard,
        isExcel,
        isPng,
        isDashboard,
        chartTitle,
        setChartTitle,
        chartTooltip,
        setTooltip,
    } = useAppContext();

    const [buttonsEnabed, setButtonsEnabled] = useState(true);

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
                <ButtonsSwitchContainer>
                    <OnOffSwitch
                        isSelected={buttonsEnabed}
                        onClick={() => setButtonsEnabled(!buttonsEnabed)}
                    />
                    <p>Buttons</p>
                </ButtonsSwitchContainer>

                <ButtonsContainer>
                    <LegendWithValue
                        onClick={setIsPng}
                        text="PNG"
                        labelColor={"#3E74FE"}
                        isChecked={isPng}
                    />
                    <LegendWithValue
                        onClick={setIsExcel}
                        text="Excel"
                        labelColor={"#3E74FE"}
                        isChecked={isExcel}
                    />
                    <LegendWithValue
                        onClick={setIsDashboard}
                        text="Dashboard"
                        labelColor={"#3E74FE"}
                        isChecked={isDashboard}
                    />
                </ButtonsContainer>
            </HeaderSectionContainer>
        </PanelSection>
    );
};
