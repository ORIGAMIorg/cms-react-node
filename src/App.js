import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import AuthStatus from './components/AuthStatus';
import Header from './components/Header';
import LoginView from './components/LoginView';
import PrivateRoute from './components/PrivateRoute';
import ProtectedView from './components/ProtectedView';
import { ProvideAuth } from './components/ProvideAuth';
import PublicView from './components/PublicView';

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <Header />
          <AuthStatus />
          <Switch>
            <Route path="/login" component={LoginView} />
            <PrivateRoute path="/edit" childComponent={ProtectedView} />
            <Route path="/" component={PublicView} />
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}
