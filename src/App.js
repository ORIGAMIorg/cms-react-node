import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {ProvideAuth} from "./components/ProvideAuth";
import AuthStatus from "./components/AuthStatus";
import PrivateRoute from "./components/PrivateRoute";
import LoginView from "./components/LoginView";
import PublicView from "./components/PublicView";
import ProtectedView from "./components/ProtectedView";

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthStatus/>

          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/public">
              <PublicView/>
            </Route>
            <Route path="/login">
              <LoginView/>
            </Route>
            <PrivateRoute path="/protected">
              <ProtectedView/>
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

