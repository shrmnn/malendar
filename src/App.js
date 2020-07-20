import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Components/header";
import Container from "./Components/container";
import About from "./Components/about";
import News from "./Components/news";
import Footer from "./Components/footer";

import "./App.css";
import FourZeroFour from "./Components/FourZeroFour";

const App = () => {
  return (
      <Router>
          <div className="App">
              <Header/>
              <div className="Content">
                  <Switch>
                      <Route exact path="/malendar/about">
                          <About/>
                      </Route>
                      <Route exact path="/malendar/news">
                          <News/>
                      </Route>
                      <Route exact path="/malendar/ongoing">
                          <Container/>
                      </Route>
                      <Route exact path="/malendar/:navYear/:navMonth">
                          <Container/>
                      </Route>
                      <Route exact path="/malendar/">
                          <Container/>
                      </Route>
                      <Route>
                          <FourZeroFour/>
                      </Route>
                  </Switch>
                  <Footer/>
              </div>
          </div>
      </Router>
  );
};

export default App;
