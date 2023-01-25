import { useMemo } from 'react';
import { node } from 'prop-types';
import AppContext from '../context/AppContext';

function AuthProvider({ children }) {
  const value = useMemo(
    () => ({ }),
    [],
  );

  return (
    <AppContext.Provider value={ value }>
      { children }
    </AppContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: node.isRequired,
};

export default AuthProvider;
