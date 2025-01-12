import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import { NavBar, Footer, Loading} from "./components";
import { Home, Profile, ExternalApi, About, MyAvailability, MyEvents } from "./views";
import { useAuth0 } from "@auth0/auth0-react";

import "./main.css";

const App = () => {
  const {isLoading} = useAuth0()

  if (isLoading) {
    return <Loading/>
  }
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/external-api" component={ExternalApi} />
          <Route path="/my-availability" component={MyAvailability} />
          <Route path="/my-events" component={MyEvents} />
          <Route path="/about" component={About} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
