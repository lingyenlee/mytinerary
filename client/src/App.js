import React, { Fragment } from 'react';
import './App.css';
import LandingPage from "./components/pages/LandingPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar"
import Register from './components/auth/Register';
import Login from "./components/auth/Login"
import CityPage from "./components/pages/CityPage"
import FavouritesPage from "./components/pages/FavouritesPage"
import CityState from "./context/city/CityState"
import AuthState from "./context/auth/AuthState"
import AlertState from "./context/alert/AlertState"
import FavouriteState from "./context/favourite/FavouriteState"
import Alerts from "./components/layout/Alerts"
import setAuthToken from "./utils/setAuthToken"
import About from './components/layout/About';
import PrivateRoute from "./components/routing/PrivateRoute"

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <CityState>
        <FavouriteState>
          <AlertState>
            <Router>
              <Fragment>
                <NavBar />
                <div className="container">
                  <Alerts />
                  <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <PrivateRoute path="/cities" component={CityPage} />
                    <PrivateRoute path="/favourites" component={FavouritesPage} />
                    <Route path="/about" component={About} />   
                  </Switch>
                </div>
              </Fragment>
            </Router>
          </AlertState>

        </FavouriteState>

      </CityState>
    </AuthState>
  );
}

export default App;
