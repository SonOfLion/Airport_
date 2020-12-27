import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture, faPlaneArrival } from "@fortawesome/free-solid-svg-icons";
import qs from "qs";

const Navigation = () => {

    const  { search }  = useLocation();

    const value = qs.parse(search, { ignoreQueryPrefix: true }).search;

    return (
        <div className="nav-container">
                <NavLink 
                to={`/departure${value ? `?search=${value}` : ''}`}
                className='nav-item' 
                activeClassName='nav-item__selected'
                >
                <div className='plane'> 
                <FontAwesomeIcon icon={faPlaneDeparture} />
                </div>
                    DEPARTURES
                </NavLink>
                <NavLink 
                to={`/arrival${value ? `?search=${value}` : ''}`}
                className='nav-item' 
                activeClassName='nav-item__selected'
                >
                <div className='plane'>
                <FontAwesomeIcon icon={faPlaneArrival} />
                </div>
                    ARRIVALS
                </NavLink>                     
        </div> 
    )
}


export default Navigation;