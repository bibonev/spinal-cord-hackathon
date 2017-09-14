import * as types from '../actions/actionTypes';

export default function temperatureReducer(state = [], action) {
    switch (action.type) {
        case types.ADD_TEMPERATURE:
            return [
                ...state,
                Object.assign({}, action.temperature)
            ];
        default:
            return state;
    }
}