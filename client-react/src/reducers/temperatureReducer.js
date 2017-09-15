import * as types from '../actions/actionTypes';

export default function temperatureReducer(state = {}, action) {
    console.log("ACTION", action);
    switch (action.type) {
        case types.GET_TEMPERATURE:
            return action.temperatureNow
        default:
            return state;
    }
}