import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import React from 'react';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard'
import User from './user';
import Create from "./create";
import { UserProvider } from './usercontext';
import EditUser from './edit-user'

function App() {
  return (
    <>
      <Router>
        <div id="wrapper">
          <Sidebar></Sidebar>

          <div id="content-wrapper" class="d-flex flex-column">
            <div id='content'>
              <Topbar></Topbar>
              <div class='container-fluid'>
                <UserProvider>
                  <Switch>
                    <Route path='/dashboard' exact={true}>
                      <Dashboard></Dashboard>
                    </Route>

                    <Route path='/user' exact={true}>
                      <User></User>
                    </Route>

                    <Route path='/create' exact={true}>
                      <Create></Create>
                    </Route>
                    <Route path='/edit-user/:id' exact={true} component={EditUser} />

                  </Switch>
                </UserProvider>
              </div>
            </div>
          </div>
        </div>
      </Router>

    </>
  );
}

export default App;
