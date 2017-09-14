import React, {PropTypes} from 'react';
import Header from './common/Header.js';
import Footer from './common/Footer.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/> {this.props.children}
                <Footer/>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequred
};

export default App;