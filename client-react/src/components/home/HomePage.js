import React from 'react';
import {Link} from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import {Chart} from 'react-d3-core';
import {ScatterPlot} from 'react-d3-basic';

class HomePage extends React.Component {
    getMockedData() {
        return [
            {
                "temperature": "36.6",
                "movement": "10",
                "pressure": "50",
                "time": "2001M01"
            }, {
                "temperature": "37.6",
                "movement": "15",
                "pressure": "40",
                "time": "2001M02"
            }, {
                "temperature": "38.6",
                "movement": "12",
                "pressure": "55",
                "time": "2001M03"
            }
        ];
    }

    getChartProps() {
        var parseDate = d3
            .time
            .format("%YM%m")
            .parse;
        return {
            width: 700,
            height: 300,
            margins: {
                left: 100,
                right: 100,
                top: 50,
                bottom: 50
            },
            // chart series, field: is what field your data want to be selected name: the
            // name of the field that display in legend color: what color is the line
            chartSeries: [
                {
                    field: 'temperature',
                    name: 'Temperature',
                    symbol: 'diamond',
                    symbolSize: 6
                }, {
                    field: 'movement',
                    name: 'Movement',
                    symbol: 'cross',
                    symbolSize: 6
                }, {
                    field: 'pressure',
                    name: 'Pressure',
                    symbol: 'circle',
                    symbolSize: 6
                }
            ],
            // your x accessor
            x: function (d) {
                return parseDate(d.time);
            },
            xScale: 'time'
        }
    }

    render() {
        const data = this.getChartProps();
        return (
            <div className="container">
                <ReactBootstrap.Jumbotron>
                    <h1>Hello, mom and dad!</h1>
                    <p>Let's check my measurements!</p>
                </ReactBootstrap.Jumbotron>
                <div>
                    <ScatterPlot
                        data={this.getMockedData()}
                        width={data.width}
                        height={data.height}
                        margins={data.margins}
                        chartSeries={data.chartSeries}
                        x={data.x}
                        xScale={data.xScale}/>
                </div>
            </div>
        );
    }
}

export default HomePage;