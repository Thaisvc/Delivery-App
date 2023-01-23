import { useState, useMemo } from 'react';
import { node } from 'prop-types';
import useApi from '../../hooks/useApi';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const api = useApi();

  const login = async (email, password) => {
    const data = await api.login(email, password);
    if (data) {
      setUser(data);
      return true;
    }
    return false;
  };

  const value = useMemo(() => ({ user, login }), [user, login]);

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
