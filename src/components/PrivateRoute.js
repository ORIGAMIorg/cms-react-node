// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './ProvideAuth';

export default function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => (auth.user ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))}
    />
  );
}
