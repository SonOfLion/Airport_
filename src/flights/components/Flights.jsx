import React, { useEffect } from "react";
import { connect } from 'react-redux';
import  qs from 'qs';
import { useParams, useLocation, Redirect } from 'react-router-dom';
import FlightsList from './FlightsList';
import { flightsListSelector, spinnerSelector } from '../flights.selectors';
import * as flightsActions from  '../flights.actions';
import Spinner from './Spinner'

const Flights = ({ getFlightsList, flightsList, isFetching }) => {
    
    useEffect(()=> {
        getFlightsList();
    }, []);
    
    let { direction } = useParams();
    let  { search }  = useLocation();

    const flightsListDirection =
        flightsList[direction === 'arrival' || 'departure' ? direction : null] || [];

    const filterText = qs.parse(search, { ignoreQueryPrefix: true }).search;

    const filteredFlights = filterText
        ? flightsListDirection.filter(flight => flight.codeShareData[0].codeShare
        .toLowerCase()
        .includes(filterText.toLowerCase()))
        : flightsListDirection;
        
    if (isFetching) {
        return <Spinner />
    }

    return (
        flightsList && direction === "arrival" || "depature"
            ? (
                <main className="flights">
                    <FlightsList flights={filteredFlights} />
                </main>
            )
            : <Redirect to="/" />
    );
    
}

const mapState = state => {
    return {
        flightsList: flightsListSelector(state),
        isFetching: spinnerSelector(state),
    };
};

const mapDispatch = {
    getFlightsList: flightsActions.getFlightsList
}
export default connect(mapState, mapDispatch)(Flights);