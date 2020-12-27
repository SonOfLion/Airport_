import React from "react";

const TableHead = () => {
    return (
        <thead className="information-container_head">
            <tr className="information-container_tr">
                <th className="information-container terminal">Terminal</th>
                <th className="information-container local-time-th">
                <span className="local-time">

                Local time
                </span>
                </th>
                <th className="information-container ">Destination</th>
                <th className="information-container ">Status</th>
                <th className="information-container ">Airline</th>
                <th className="information-container ">Flight</th>
            </tr>
        </thead>
    )
}

export default TableHead;