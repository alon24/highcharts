import React, { FC, useState } from "react";
import { useCallback } from "react";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { TopBar } from "../TopBar/TopBar";
import { MainContainer } from "./MainStyles";
import { GraphType } from "./MainTypes";

export const Main: FC = () => {
    const [selectedGraphType, setSelectedGraphType] = useState<GraphType>("Doughnut");

    const handleSelectGraphType = useCallback(
        (type: GraphType) => {
            setSelectedGraphType(type);
        },
        [selectedGraphType],
    );

    return (
        <MainContainer>
            <TopBar />
            <ControlPanel
                onSelectGraphType={handleSelectGraphType}
                selectedGraphType={selectedGraphType}
            />
        </MainContainer>
    );
};
