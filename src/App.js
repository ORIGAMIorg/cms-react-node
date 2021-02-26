import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ProvideAuth } from "./components/ProvideAuth";
import AuthStatus from "./components/AuthStatus";
import PrivateRoute from "./components/PrivateRoute";
import LoginView from "./components/LoginView";
import PublicView from "./components/PublicView";
import ProtectedView from "./components/ProtectedView";
import Header from "./components/Header";

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <Header/>
          <AuthStatus/>
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

