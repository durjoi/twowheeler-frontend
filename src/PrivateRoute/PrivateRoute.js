import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    let {user, loading} = useAuth();

    if(loading) {
      return (
          <div className="pt-3 pb-3 text-center">
            <p>Loading...</p>
          </div>
      );
    }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;