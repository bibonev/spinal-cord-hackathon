import * as types from './actionTypes';

export function getMeasurements(date) {
    return {type: types.GET_MEASUREMENTS, date};
}