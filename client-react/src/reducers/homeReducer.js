import * as types from '../actions/actionTypes';

export default function homeReducers(state = [], action) {
    switch (action.type) {
        case types.GET_MEASUREMENTS:
            return [
                {
                    text: "Movement",
                    values: [
                        [
                            8, action.date.length
                        ],
                        [
                            9, 12
                        ],
                        [
                            11, 7
                        ],
                        [
                            11, 14
                        ],
                        [
                            12, 1
                        ],
                        [
                            13, 19
                        ],
                        [14, 4]
                    ]
                }, {
                    text: "Temperature",
                    values: [
                        [
                            8, 37
                        ],
                        [
                            9, 36.5
                        ],
                        [
                            10, 36
                        ],
                        [
                            11, 36.5
                        ],
                        [
                            12, 37.5
                        ],
                        [
                            13, 38
                        ],
                        [14, 36.9]
                    ]
                }, {
                    text: "Pressure",
                    values: [
                        [
                            8, 0
                        ],
                        [
                            9, 1
                        ],
                        [
                            10, 12
                        ],
                        [
                            11, 12
                        ],
                        [
                            12, 4
                        ],
                        [
                            13, 6
                        ],
                        [14, 17]
                    ]
                }
            ];
        default:
            return state;
    }
}