import React from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';

const ProtectedRoute = props => {
  const history = useHistory();
  const unprotected = (e) => {
    history.push('/')
    props.setShowSignUp(true)
  };

  return (
    <Route {...props}>
      {props.authenticated && props.children}
      {!props.authenticated && unprotected()}
    </Route>
  )
};


export default ProtectedRoute;
