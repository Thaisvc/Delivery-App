import { useState, useMemo } from 'react';
import { node } from 'prop-types';
import useApi from '../../hooks/useApi';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [, setCreated] = useState(null);
  const api = useApi();

  const login = async (email, password) => {
    const data = await api.login(email, password);
    if (data) {
      setUser(data);
      return true;
    }
    return false;
  };

  const register = async (name, email, password, role) => {
    const data = await api.register(name, email, password, role);
    if (data) {
      setCreated(data);
      return true;
    }
    return false;
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      login,
      register }),
    [user, login, setUser, register],
  );

  return (
    <AuthContext.Provider value={ value }>
      { children }
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: node.isRequired,
};

export default AuthProvider;
