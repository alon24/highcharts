import React, { FC, useState } from "react";
import { useCallback } from "react";
import { ControlPanel } from "../ControlPanel/ControlPanel";
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
        <ControlPanel
            onSelectGraphType={handleSelectGraphType}
            selectedGraphType={selectedGraphType}
        />
    );
};
