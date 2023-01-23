import React from 'react';
import { Link } from 'react-router-dom';

function RedirectToLogin() {
  return (
    <Link data-testid="navbar_login_btn" to="/login">
      Login
    </Link>
  );
}

export default RedirectToLogin;
