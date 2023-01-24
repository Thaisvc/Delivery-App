import React, { useMemo } from 'react';
import { node } from 'prop-types';
import AppContext from '../context/AppContext';

function AppProvider({ children }) {
  const value = useMemo(() => {

  }, []);

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: node.isRequired,
};

export default AppProvider;
