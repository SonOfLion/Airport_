import moment from "moment";

const baseUrl = `https://api.iev.aero/api/flights/${moment().format("DD-MM-YYYY")}`;

export const fetchFlightsList = () => {
    return fetch(baseUrl)
        .then(res => {
        if (res.ok) {
            return res.json();
        }
        throw new Error('Failed to get flights list'); 
        });
};