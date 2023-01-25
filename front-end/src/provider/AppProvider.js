import { useState, useMemo } from 'react';
import { node } from 'prop-types';
import useApi from '../hooks/useApi';
import AppContext from '../context/AppContext';

function AuthProvider({ children }) {
  const [prodList, setProdList] = useState([]);
  const api = useApi();

  const getProds = async () => {
    const data = await api.getProds();
    if (data) {
      setProdList(data);
      return true;
    }
    return false;
  };

  const value = useMemo(
    () => ({ prodList, getProds }),
    [prodList, getProds],
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
