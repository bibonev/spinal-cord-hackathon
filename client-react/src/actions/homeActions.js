import * as types from './actionTypes';

export function getMeasurements(date) {
    return (dispatch, getState) => {
        let temperatureUrl = `http://0.0.0.0:9000/temperature`;
        let movementUrl = `http://0.0.0.0:9000/movement`;
        let pressureUrl = `http://0.0.0.0:9000/pressure`;

        let temperatureData;
        let movementData;
        let pressureData;

        $.get(temperatureUrl, dataT => {
            $.get(movementUrl, dataM => {
                $.get(pressureUrl, dataP => {
                    dispatch(showMeasurements(dataT.temperature, dataM.movement, dataP.pressure));
                });
            });
        });
    };
}

export function showMeasurements(temperature, movement, pressure) {
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
            text: "Pressure",
            values: pressure
        }
    };
}