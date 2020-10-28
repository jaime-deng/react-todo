//@flow
import React from "react";
import { Route, Switch } from "react-router-dom"
import ThemeSwitcher from "./ThemeSwitcher";



import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import Error from "./Error"
import API from "./API"


function App(props) {
  return (

    <div className="">
      {/* <ThemeSwitcher /> */}
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} />
        <Route path="/API" component={API} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
