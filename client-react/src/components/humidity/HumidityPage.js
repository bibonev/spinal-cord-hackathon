import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

class PressurePage extends React.Component {
    render() {
        return (
            <div className="container">
                <ReactBootstrap.Jumbotron>
                    <h1>Humidity</h1>
                    <p>Humidity meassurements</p>
                </ReactBootstrap.Jumbotron>
            </div>
        );
    }
}

export default PressurePage;