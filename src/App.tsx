import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chooser from "./components/chooser/index";

import AkitaTodo from "./components/akita/todo/index";
import ContextTodo from "./components/context/todo/index";
import DrillingTodo from "./components/drilling/todo/index";
import RecoilTodo from "./components/recoil/todo/index";
import ReduxTodo from "./components/redux/todo/index";
import './App.css';

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Chooser />
        </Route>
        <Route exact path="/akita">
          <AkitaTodo />
        </Route>
        <Route exact path="/drilling">
          <DrillingTodo />
        </Route>
        <Route exact path="/context">
          <ContextTodo />
        </Route>
        <Route exact path="/redux">
          <ReduxTodo />
        </Route>
        <Route exact path="/recoil">
          <RecoilTodo />
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
