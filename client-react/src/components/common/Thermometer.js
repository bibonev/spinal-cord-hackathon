import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as temperatureActions from '../../actions/temperatureActions';

class Thermometer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: () => this.props.theme === 'light' || this.props.theme === 'dark'
                ? this.props.theme
                : 'light',
            value: this.props.value || 0, //default 0
            type: this.props.type || 'body', //default body
            max: this.props.max || 100, //default 100
            steps: this.props.steps || 4, //default 4
            format: this.props.format || '',
            size: () => this.props.size === 'small' || this.props.size === 'normal' || this.props.size === 'large'
                ? this.props.size
                : 'normal',
            height: this.props.height || 200, //default 200
            valstr: () => this.state.format + this.state.value,
            percent: () => this.state.value / this.state.max * 100,
            intervals: []
        }

        for (let step = 0; step <= this.state.steps; step++) {
            let val = ((this.state.max / this.state.steps) * step).toFixed(2);
            let percent = (val / this.state.max) * 100;
            let interval = {
                percent: percent,
                label: this.state.format + val
            };
            this
                .state
                .intervals
                .push(interval);
        }

        this.onTick = this
            .onTick
            .bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.onTick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onTick() {
        this
            .props
            .actions
            .getTmperatures();

        this.setState({
            value: this.state.type === "room"
                ? this.props.temperatures.temperature.room
                : this.props.temperatures.temperature.body
        });
    }

    render() {
        const theme = `thermometer--theme-${this
            .state
            .theme()}`;
        const size = `thermometer--${this
            .state
            .size()}`;
        const height = {
            height: `${this.state.height}px`
        };
        const heightPercent = {
            height: `${this
                .state
                .percent()}%`
        };
        const heightBgColor = {
            height: `calc(${this.state.height}px - 57px)`
        };
        const valstr = this
            .state
            .valstr();
        const stepIntervals = this
            .state
            .intervals
            .map((step, i) => {
                return (
                    <li
                        key={i}
                        style={{
                        bottom: `calc(${step.percent}% - 1px)`
                    }}>
                        {step.label}
                    </li>
                );
            });

        return (
            <div style={height} className={`thermometer ${size} ${theme}`}>
                <div className="thermometer__draw-a"></div>
                <div className="thermometer__draw-b"></div>
                <div className="thermometer__meter">
                    <ul className="thermometer__statistics">{stepIntervals}</ul>
                    <div style={heightPercent} className="thermometer__mercury">
                        <div className="thermometer__percent-current">{valstr}</div>
                        <div className="thermometer__mask">
                            <div className="thermometer__bg-color" style={heightBgColor}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {temperatures: state.temperature};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(temperatureActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Thermometer);