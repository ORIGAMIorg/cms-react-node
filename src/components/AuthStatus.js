import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './ProvideAuth';

export default function AuthStatus() {
  const history = useHistory();
  const auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!
      {' '}
      <button
        type="button"
        onClick={() => {
          auth.signout(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}
