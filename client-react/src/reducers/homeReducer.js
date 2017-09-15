import * as types from '../actions/actionTypes';

export default function homeReducers(state = [], action) {
    switch (action.type) {
        case types.GET_MEASUREMENTS:
            return []
                .concat(action.temperature)
                .concat(action.movement)
                .concat(action.pressure);
        default:
            return state;
    }
}