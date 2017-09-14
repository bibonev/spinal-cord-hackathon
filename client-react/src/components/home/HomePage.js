import React from 'react';
import {Link} from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const LineChart = require('zingchart-react').scatter;

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            startDate: moment()
        };
        this.handleChange = this
            .handleChange
            .bind(this);
    }

    handleChange(date) {
        console.log("DATE", date.startOf('day').format('LL'));
        this.setState({startDate: date});
    }

    getMockedData() {
        return [
            {
                text: "Movement",
                values: [
                    [
                        8, 18
                    ],
                    [
                        9, 12
                    ],
                    [
                        11, 7
                    ],
                    [
                        11, 14
                    ],
                    [
                        12, 1
                    ],
                    [
                        13, 19
                    ],
                    [14, 4]
                ]
            }, {
                text: "Temperature",
                values: [
                    [
                        8, 37
                    ],
                    [
                        9, 36.5
                    ],
                    [
                        10, 36
                    ],
                    [
                        11, 36.5
                    ],
                    [
                        12, 37.5
                    ],
                    [
                        13, 38
                    ],
                    [14, 36.9]
                ]
            }, {
                text: "Pressure",
                values: [
                    [
                        8, 0
                    ],
                    [
                        9, 1
                    ],
                    [
                        10, 12
                    ],
                    [
                        11, 12
                    ],
                    [
                        12, 4
                    ],
                    [
                        13, 6
                    ],
                    [14, 17]
                ]
            }
        ];
    }

    render() {
        return (
            <div className="container">
                <ReactBootstrap.Jumbotron>
                    <h1>Hello, mom and dad!</h1>
                    <p>Let's check my measurements!</p>
                </ReactBootstrap.Jumbotron>
                <div>
                    <div
                        style={{
                        display: "inline-block"
                    }}>
                        <LineChart
                            id="generalMeasurements"
                            height="600"
                            width="900"
                            series={this.getMockedData()}
                            legend="true"
                            theme="light"
                            title=""/>
                    </div>
                    <div
                        style={{
                        display: "inline-block",
                        position: "absolute",
                        marginTop: "210px"
                    }}>
                        <DatePicker
                            inline
                            selected={this.state.startDate}
                            onChange={this.handleChange}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;