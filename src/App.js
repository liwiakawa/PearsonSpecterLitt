import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./screens/home";
import About from "./screens/about";
import Team from "./screens/team";
import Services from "./screens/services";
import Career from "./screens/career";
import Contact from "./screens/contact";
import Phone from "./components/phone-number";
import Nav from"./components/navigation";

import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
    <Phone />
    <Nav />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/team" component={Team}/>
      <Route path="/services" component={Services}/>
      <Route path="/career" component={Career}/>
      <Route path="/contact" component={Contact}/>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
  );
}

export default App;
