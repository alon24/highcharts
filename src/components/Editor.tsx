import React, { useRef, useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-min-noconflict/ext-language_tools";
import styled from "styled-components/macro";
import { Wrapper } from "./styles";

import { samples } from "./editor/samples";
import { Ace } from "ace-builds";

export interface IEditor {
    onChange: (data: string) => any;
}

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props: { primary: any }) => (props.primary ? "palevioletred" : "white")};
    color: ${(props: { primary: any }) => (props.primary ? "white" : "palevioletred")};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

export const Editor: React.FC<any> = (props: IEditor) => {
    const { onChange } = props;
    const aceEditor = useRef(null);
    const [chartData, setChartData] = useState("test123");

    function handleChange(newValue: any) {
        onChange && onChange(newValue);
    }

    function handleClick(evt: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
        evt.preventDefault();
        const element = evt.target as any;
        const { name } = element;

        const sampleChooser: any = {
            pie: JSON.stringify(samples.pie, null, "\t"),
            stock: JSON.stringify(samples.stock, null, "\t"),
        };

        const sample = sampleChooser[name] || "Unknown";
        setChartData(sample);
        onChange && onChange(sample);
    }

    return (
        <React.Fragment>
            <Wrapper flexDirection={"row"}>
                <AceEditor
                    ref={aceEditor}
                    name={"MyEditor"}
                    mode="json"
                    theme="tomorrow_night_bright"
                    width="80vw"
                    onChange={handleChange}
                    editorProps={{
                        $blockScrolling: true,
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                    }}
                    value={chartData}
                />
                <Wrapper>
                    <Button name="pie" primary onClick={handleClick}>
                        Pie
                    </Button>
                    <Button name="stock" primary onClick={handleClick}>
                        Stock
                    </Button>
                </Wrapper>
            </Wrapper>
        </React.Fragment>
    );
};
