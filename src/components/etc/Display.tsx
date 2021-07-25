import React, { useState } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import MyStockChart from "./MySockChart";

interface IDisplay {
    data: string;
}

// The wrapper exports only a default component class that at the same time is a
// namespace for the related Props interface (HighchartsReact.Props). All other
// interfaces like Options come from the Highcharts module itself.

const options: Highcharts.Options = {
    title: {
        text: "My chart",
    },
    series: [
        {
            type: "line",
            data: [1, 2, 3],
        },
    ],
};

export const Display: React.FC<IDisplay> = (props: HighchartsReact.Props & IDisplay) => {
    const { data } = props;
    // const [hoverData, setHoverData] = useState(null);
    // const [chartOptions, setChartOptions] = useState<any>({
    //     chart: {
    //         plotBackgroundColor: null,
    //         plotBorderWidth: null,
    //         plotShadow: false,
    //         type: "pie",
    //     },
    //     title: {
    //         text: "Browser market shares in January, 2018",
    //     },
    //     tooltip: {
    //         pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    //     },
    //     accessibility: {
    //         point: {
    //             valueSuffix: "%",
    //         },
    //     },
    //     plotOptions: {
    //         pie: {
    //             allowPointSelect: true,
    //             cursor: "pointer",
    //             dataLabels: {
    //                 enabled: true,
    //                 format: "<b>{point.name}</b>: {point.percentage:.1f} %",
    //             },
    //         },
    //     },
    //     series: [
    //         {
    //             name: "Brands",
    //             colorByPoint: true,
    //             data: [
    //                 {
    //                     name: "Chrome",
    //                     y: 61.41,
    //                     sliced: true,
    //                     selected: true,
    //                 },
    //                 {
    //                     name: "Internet Explorer",
    //                     y: 11.84,
    //                 },
    //                 {
    //                     name: "Firefox",
    //                     y: 10.85,
    //                 },
    //                 {
    //                     name: "Edge",
    //                     y: 4.67,
    //                 },
    //                 {
    //                     name: "Safari",
    //                     y: 4.18,
    //                 },
    //                 {
    //                     name: "Sogou Explorer",
    //                     y: 1.64,
    //                 },
    //                 {
    //                     name: "Opera",
    //                     y: 1.6,
    //                 },
    //                 {
    //                     name: "QQ",
    //                     y: 1.2,
    //                 },
    //                 {
    //                     name: "Other",
    //                     y: 2.61,
    //                 },
    //             ],
    //         },
    //     ],
    // });
    // const updateSeries = () => {
    //     setChartOptions({
    //         series: [{ data: [Math.random() * 5, 2, 1] }],
    //     });
    // };

    return (
        <React.Fragment>
            <h1>Display</h1>
            <HighchartsReact highcharts={Highcharts} options={data} {...props} />
            {/*<MyStockChart />*/}
        </React.Fragment>
    );
};
