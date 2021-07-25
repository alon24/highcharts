import { SeriesCounterButtonContainer, SeriesCounterContainer } from "../TopPartStyles";

const SeriesCounterButton = (props: { text: string; onClick: () => void }) => {
    return (
        <SeriesCounterButtonContainer onClick={props.onClick}>
            {props.text}
        </SeriesCounterButtonContainer>
    );
};

export const SeriesCounter = (props: {
    seriesCount: number;
    onSetSeriesCount: (count: number) => void;
    maxAllowedCount: number;
}) => {
    const { seriesCount, onSetSeriesCount, maxAllowedCount } = props;

    const handleAddCount = () => {
        if (seriesCount >= maxAllowedCount) return;
        onSetSeriesCount(seriesCount + 1);
    };

    const handleSubtractCount = () => {
        if (seriesCount <= 1) return;
        onSetSeriesCount(seriesCount - 1);
    };

    return (
        <SeriesCounterContainer>
            <SeriesCounterButton text={"-"} onClick={handleSubtractCount} />
            <span>{`${seriesCount} Series`}</span>
            <SeriesCounterButton text={"+"} onClick={handleAddCount} />
        </SeriesCounterContainer>
    );
};
