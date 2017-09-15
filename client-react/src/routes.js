import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App.js';
import HomePage from './components/home/HomePage.js';
import MovementPage from './components/movement/MovementPage.js';
import HumidityPage from './components/humidity/HumidityPage.js';
import TemperaturePage from './components/temperature/TemperaturePage.js';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="temperature" component={TemperaturePage}/>
        <Route path="movement" component={MovementPage}/>
        <Route path="humidity" component={HumidityPage}/>
    </Route>
);