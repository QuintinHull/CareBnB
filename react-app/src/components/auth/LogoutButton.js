import React from "react";
import { Button } from "react-bootstrap"
import { useHistory } from "react-router";
import { logout } from "../../services/auth";

const LogoutButton = ({ setAuthenticated }) => {
  const history = useHistory();

  const onLogout = async (e) => {
    history.push('/');
    await logout();
    setAuthenticated(false);
  };

  return <Button onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
