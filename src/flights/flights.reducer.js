import { SHOW_SPINNER ,FLIGHTS_LIST_RECIEVED } from './flights.actions';

const initialState = {
    isFetching: false,
    flightsList: {
    body: {}
    },
};

const flightsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SPINNER: {
            return {
                ...state,
                isFetching: true,
            }
        }
        case FLIGHTS_LIST_RECIEVED:
            return {
                ...state,
                flightsList: action.payload.flightsList,
                isFetching: false,
            };

        default:
            return state;
    }
};
export default flightsReducer;