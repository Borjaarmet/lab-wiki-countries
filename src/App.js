import React from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesJSON from './countries.json';

import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  state = {
    countries: countriesJSON,
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="flex justify-arround">
          <CountriesList countries={this.state.countries} />

          <Switch>
            <Route path="/countries/:cca3" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
