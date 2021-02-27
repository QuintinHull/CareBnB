import React from "react";
import { Button } from "react-bootstrap"
import { logout } from "../../services/auth";

const LogoutButton = ({ setAuthenticated }) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return <Button onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
