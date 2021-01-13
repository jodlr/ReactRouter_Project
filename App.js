import React from "react";
import "./styles.css";
import { Switch, Route, Link } from "react-router-dom";
import Name from "./Name";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import { useHistory } from "react-router-dom";

export default function App() {
  const history = useHistory();
  return (
    <div className="App">
      <button>
        <Link to="/name"> My Name: </Link>
      </button>
      <button onClick={() => history.push("/aboutme")}> Something About Me </button>
      <button onClick={() => history.push("/")}> My Contact </button>
      <Switch>
        <Route exact path="/name" render={(props) => <Name {...props} />} />
        <Route path="/aboutme">
          <AboutMe />
        </Route>
        <Route path="/">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}
