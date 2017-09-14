import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

class MovementPage extends React.Component {
    render() {
        return (
            <div className="container">
                <ReactBootstrap.Jumbotron>
                    <h1>Movement</h1>
                    <p>Movement measurements</p>
                </ReactBootstrap.Jumbotron>
            </div>
        );
    }
}

export default MovementPage;