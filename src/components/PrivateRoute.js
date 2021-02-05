// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
import {useAuth} from "./ProvideAuth";
import {Redirect, Route} from "react-router-dom";
import React from "react";

export default function PrivateRoute({children, ...rest}) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({location}) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {from: location}
            }}
          />
        )
      }
    />
  );
}