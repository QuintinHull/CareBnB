import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
  return (
    <Route {...props}>
      {(props.authenticated) ? props.children : props.setShowSignUp(true)}
    </Route>
  )
};


export default ProtectedRoute;
