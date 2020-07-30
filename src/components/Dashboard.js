import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";

import { StateContext } from "../context/globalState"

import Creates from "./side-bar/create/create";
import User from "./side-bar/user/user";
import Chats from "./side-bar/chats/chats";
import Friends from "./side-bar/friends/friends";


import NavBar from "./navBar/navBar";

import Main from "./main/main"


function DashBoard(props) {
  const { hide } = useContext(StateContext)
  let history = useHistory();
  return (
    <React.Fragment>
      <Router>
        <div className="layout">
          <NavBar />
          <div className="sidebar">
            <Switch>
              <Route exact path="/">
                <Creates />
              </Route>
              <Route exact path="/friends">
                <Friends />
              </Route>
              <Route exact path="/dialogs">
                <Chats />
              </Route>
              <Route exact path="/user">
                <User />
              </Route>
              <Route path="/login" render={() => history.push('login')} />
              {/* nest second generation */}
              <Route path="*" render={() => history.push('../notfound')} />
            </Switch>
          </div>
          <div className={`main ${hide ? '' : 'main-visible'}`}>
            <Main />
          </div>
        </div>
      </Router>{" "}
    </React.Fragment>
  );
}

export default DashBoard

