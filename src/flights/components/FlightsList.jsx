import React from 'react';
import TableHead from "./TableHead";
import moment from "moment"

const FlightsList = ({flights}) => {

    const fligtsListDirectionMapped = flights.map(el => {
        let status = el.status === "DP"
                    ? "Departed"
                    : "Landed";

        let timeShedule = status === "Departed" 
        ? moment(el.timeDepShedule).format("h:mm")
        : moment(el.timeArrShedule).format("h:mm");

        let terminal = el.term === 'A' 
        ? <span className='term term__A'>A</span> 
        : el.term === 'D' 
        ? <span className='term term__D'>D</span>
        : <span className='term term__C'>C</span>

        return (
        <tr className="information-container_body" key={el.ID}>
            <td className="information-container">
                {terminal} 
            </td>
            <td className="information-container">
                {timeShedule}
            </td>
            <td className="information-container">
                {el["airportToID.city_en"] || el["airportFromID.city_en"]}
            </td>
            <td className="information-container">
                {`${status} ${moment(el.timeLandFact).format("h:mm")}`}
            </td>
            <td className="information-container logo">
                <img
                    className="company-name__logo"
                    src={`https://api.iev.aero${el.codeShareData[0].logo}`}
                    alt="company-logo"
                />
                <span className="company-name">
                    {el.airline.en.name} 
                </span>         
            </td>
            <td className="information-container">
                {el.codeShareData[0].codeShare}
            </td>
        </tr>)
    })
    const result = fligtsListDirectionMapped.length > 0 
    ? <table className="table">
    <TableHead/>
    <tbody>
        {fligtsListDirectionMapped}
    </tbody>
    </table>
    : <div className="empty-result"><span>{`No flight`}</span></div>;

    

    return (
        result
    )
}

export default FlightsList;