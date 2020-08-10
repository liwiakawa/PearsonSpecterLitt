import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./screens/home";
import About from "./screens/about";
import Phone from "./components/phone-number";
import Nav from"./components/navigation";

function App() {
  return (
    <BrowserRouter>
    <Phone />
    <Nav />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
