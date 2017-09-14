import {combineReducers} from 'redux';
import temperature from './temperatureReducer';
import measurements from './homeReducer';

const rootReducer = combineReducers({temperature, measurements});

export default rootReducer;