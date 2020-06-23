import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import MenuBar from "../src/components/MenuBar";
import Home from "../src/containers/Home";
import Login from "../src/containers/Login";
import Register from "../src/containers/Register";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Container>
      <Router>
        <MenuBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Router>
    </Container>
  );
};

export default App;
