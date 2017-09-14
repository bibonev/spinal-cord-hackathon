import {combineReducers} from 'redux';
import temperature from './temperatureReducer';

const rootReducer = combineReducers({temperature});

export default rootReducer;