// import { createSelector } from 'reselect';

export const flightsListSelector = state => 
    state.flights.flightsList.body;

export const spinnerSelector = state => 
    state.flights.isFetching;

// export const sortedTasksListSelector = createSelector(
//   [tasksListSelector],
//   (tasksList) => {
//     return tasksList.slice()
//     .sort((a, b) => a.done - b.done);
//   },
// );