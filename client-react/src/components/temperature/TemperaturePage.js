import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as temperatureActions from '../../actions/temperatureActions';
import Thermometer from '../common/Thermometer.js';
import * as ReactBootstrap from 'react-bootstrap';

class TemperaturePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="container">
                <ReactBootstrap.Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <ReactBootstrap.Tab eventKey={1} title="Room">
                        <br/>
                        <div className="text-center">
                            <Thermometer
                                theme={'light'}
                                type={"room"}
                                max={45}
                                format={'°'}
                                steps={3}
                                size={'small'}
                                height={180}/>
                        </div>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey={2} title="Body">
                        <br/>
                        <div className="text-center">
                            <Thermometer
                                theme={'light'}
                                type={"body"}
                                max={45}
                                format={'°'}
                                steps={3}
                                size={'small'}
                                height={180}/>
                        </div>
                    </ReactBootstrap.Tab>
                </ReactBootstrap.Tabs>
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
