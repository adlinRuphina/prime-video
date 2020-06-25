import React, { Component, Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import HeaderComponent from './Component/Header/HeaderComponent';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import HomeComponent from './Component/HomeComponent/HomeComponent';
import Login from './Component/Auth/LoginComponent';
import Register from './Component/Auth/RegisterComponent';
import PasswordReset from './Component/Auth/PasswordResetComponent';
import PageNotFoundComponent from './Component/PageNotFound/PageNotFoundComponent';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Router>
          <header>
            <HeaderComponent />
          </header>
          <ToastContainer />
          <main className="container">
            <Switch>
              <Route path="/" exact component={HomeComponent} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/password-reset" exact component={PasswordReset} />
              <Route path="**" component={PageNotFoundComponent} />
            </Switch>
          </main>
        </Router>
      </Fragment>
    );
  }
}

export default withRouter(App);

/*--------
App.js is the root component file and it holds global
 state for all sub-component
*/
