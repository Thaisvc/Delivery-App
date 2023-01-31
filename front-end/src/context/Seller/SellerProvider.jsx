import { useMemo, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { node } from 'prop-types';
import SellerContext from './SellerContext';
import useApi from '../../hooks/useApi';
import { getByKey } from '../../utils/localStorage';

function SellerProvider({ children }) {
  const [saleList, setSaleList] = useState([]);

  const api = useApi();

  const nav = useNavigate();

  useEffect(() => {
    if (getByKey('user').role !== 'seller') nav('/');
  }, [nav]);

  const getSales = useCallback(async () => {
    const data = await api.getSales();
    if (data.length) {
      setSaleList(data);
      return true;
    }
    return false;
  }, [api]);

  const value = useMemo(
    () => ({
      getSales,
      saleList,
    }),
    [
      getSales,
      saleList,
    ],
  );

  return (
    <SellerContext.Provider value={ value }>
      { children }
    </SellerContext.Provider>
  );
}

SellerProvider.propTypes = {
  children: node.isRequired,
};

export default SellerProvider;
