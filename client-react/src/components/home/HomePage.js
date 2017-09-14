import React from 'react';
import {Link} from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';

class HomePage extends React.Component {
    render() {
        return (
            <div className="container">
                <ReactBootstrap.Jumbotron>
                    <h1>Hello, mom and dad!</h1>
                    <p>Let's check my measurements!</p>
                </ReactBootstrap.Jumbotron>
            </div>
        );
    }
}

export default HomePage;