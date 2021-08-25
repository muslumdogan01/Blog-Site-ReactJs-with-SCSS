import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Write from "./Pages/Write/Write";

import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import TopBar from "./Topbar/TopBar";
import About from "./Pages/About/About";
function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Register">{user ? <Home /> : <Register />}</Route>
        <Route path="/Login">{user ? <Home /> : <Login />}</Route>
        <Route path="/Write">{user ? <Home /> : <Write />}</Route>
        <Route path="/Contact">{user ? <Home /> : <Contact />}</Route>
        <Route path="/About">{user ? <Home /> : <About />}</Route>
        <Route path="/Post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
