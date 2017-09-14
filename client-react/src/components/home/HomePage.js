import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ReactBootstrap from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import * as homeActions from '../../actions/homeActions';

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

    componentWillMount() {
        this
            .props
            .actions
            .getMeasurements(this.state.startDate);
    }

    handleChange(date) {
        console.log("DATE", date.startOf('day').format('LL'));
        this.setState({startDate: date});
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
                            series={this.props.measurements}
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

HomePage.propTypes = {
    actions: PropTypes.object.isRequired,
    measurements: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log("STATE", state);
    return {measurements: state.measurements};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(homeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);