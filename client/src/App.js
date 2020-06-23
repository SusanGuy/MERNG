import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import MenuBar from "../src/components/MenuBar";
import Home from "../src/containers/Home";
import Login from "../src/containers/Login";
import Register from "../src/containers/Register";
import { Container } from "semantic-ui-react";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./utils/AuthRoute";

const App = () => {
  return (
    <AuthProvider>
      <Container>
        <Router>
          <MenuBar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
        </Router>
      </Container>
    </AuthProvider>
  );
};

export default App;
