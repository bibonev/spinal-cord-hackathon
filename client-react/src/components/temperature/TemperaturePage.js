import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as temperatureActions from '../../actions/temperatureActions';
import {Thermometer} from '../common/Thermometer.js';

class TemperaturePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            temperature: {
                title: ""
            }
        };

        this.onTitleChange = this
            .onTitleChange
            .bind(this);
        this.onClickSave = this
            .onClickSave
            .bind(this);
    }

    onTitleChange(event) {
        const temperature = this.state.temperature;
        temperature.title = event.target.value;
        this.setState({temperature: temperature});
    }

    onClickSave() {
        this
            .props
            .actions
            .addTemperature(this.state.temperature);
    }

    temperatureRow(temperature, index) {
        return (
            <div key={index}>
                {temperature.title}
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <Thermometer
                    theme={'light'}
                    value={35}
                    max={45}
                    format={'°'}
                    steps={3}
                    size={'small'}
                    height={180}/>
            </div>
        );
    }
}

TemperaturePage.propTypes = {
    actions: PropTypes.object.isRequired,
    temperatures: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {temperatures: state.temperature};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(temperatureActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TemperaturePage);
