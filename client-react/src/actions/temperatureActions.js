import * as types from './actionTypes';

export function addTemperature(temperature) {
    return {type: types.ADD_TEMPERATURE, temperature};
}