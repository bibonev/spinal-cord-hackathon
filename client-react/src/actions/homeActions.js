import * as types from './actionTypes';

export function getMeasurements(date) {
    return (dispatch, getState) => {
        let temperatureUrl = `http://0.0.0.0:9000/temperature`;
        let movementUrl = `http://0.0.0.0:9000/movement`;
        let humidityUrl = `http://0.0.0.0:9000/humidity`;

        $.get(temperatureUrl, dataT => {
            $.get(movementUrl, dataM => {
                $.get(humidityUrl, dataH => {
                    dispatch(showMeasurements(dataT.temperature, dataM.movement, dataH.humidity));
                });
            });
        });
    };
}

export function showMeasurements(temperature, movement, humidity) {
    return {
        type: types.GET_MEASUREMENTS,
        movement: {
            text: "Movement",
            values: movement
        },
        temperature: {
            text: "Temperature",
            values: temperature
        },
        pressure: {
            text: "Humidity",
            values: humidity
        }
    };
}