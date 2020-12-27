import * as fligthsGateway from '../flights/flights.gateway';

export const SHOW_SPINNER = "SHOW_SPINNER";
export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';

export const showSpinner = () => {
    return {
        type: SHOW_SPINNER,
    }
}

export const flightsListRecieved = (flightsList) => {
    const action = {
        type: FLIGHTS_LIST_RECIEVED,
        payload: {
        flightsList,
        }
    }
    return action;
}

export const getFlightsList = () => {
    const thunkAction = function (dispatch) {
        dispatch(showSpinner())
        fligthsGateway
        .fetchFlightsList()
        .then(flightsList => dispatch(flightsListRecieved(flightsList)))
    };
    
    return thunkAction;
}