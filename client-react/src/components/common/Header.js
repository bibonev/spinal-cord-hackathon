import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <ReactBootstrap.Navbar>
                <ReactBootstrap.Navbar.Header>
                    <ReactBootstrap.Navbar.Brand>
                        <Link to="/">TSH</Link>
                    </ReactBootstrap.Navbar.Brand>
                </ReactBootstrap.Navbar.Header>
                <ReactBootstrap.Nav>
                    <ReactBootstrap.NavItem eventKey={1}>
                        <Link to="/">Temperature</Link>
                    </ReactBootstrap.NavItem>
                    <ReactBootstrap.NavItem eventKey={2}>
                        <Link to="/">Movement</Link>
                    </ReactBootstrap.NavItem>
                    <ReactBootstrap.NavItem eventKey={2}>
                        <Link to="/">Pressure</Link>
                    </ReactBootstrap.NavItem>
                </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar>
        </div>
    );
};

export default Header;