export const Code = () => {
    return (
        <p style={{ width: "80%" }}>{`    const legendItems = [
        { label: "Series A", color: "#38618C" },
        { label: "Series B", color: "#41C8BB" },
        { label: "Series C", color: "#FF9A47" },
        { label: "Series D", color: "#E95F5F" },
        { label: "Series E", color: "#F9CF5A" },
    ].slice(0, seriesCount);
    const chartData = mockData[chartType].slice(0, seriesCount);
    const chartContextInitialValue: IChartContextInitialValue = {
        legends: { legendItems },
        chart: { chartData, chartType, is3D },
    };
    const useChartArgs = {
        chartContextInitialValue,
    };

    const { ChartContextProvider, Legends, ChartTitle, Chart } = useChart(useChartArgs);
    return (
        <ChartContextProvider>
            <ChartTitle>chart title</ChartTitle>
            <Legends />
            <Chart />
        </ChartContextProvider>
    );`}</p>
    );
};
