import * as types from './actionTypes';

export function getTmperatures() {
    return (dispatch, getState) => {
        let temperatureUrl = `http://0.0.0.0:9000/temperatureNow`;

        $.get(temperatureUrl, dataT => {
            dispatch(showTemperature(dataT));
        });
    };
}

export function showTemperature(temperature) {
    return {type: types.GET_TEMPERATURE, temperatureNow: temperature};
}