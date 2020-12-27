import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import SearchForm from '../src/flights/components/SearchForm';
import Flights from '../src/flights/components/Flights';
import Navigation from '../src/flights/components/Navigation';

const App = () => {
    return (
        <div className="container">
        <Provider store={store}>
            <Router>
                <SearchForm />
                <Navigation />
                <Switch>
                <Route exact path="/">
                    <Redirect to="/arrival"/> : <Flights />
                </Route>
                <Route path='/:direction' children={<Flights />} />
                </Switch>
            </Router>
        </Provider>
        </div>  
    );
};

export default App;