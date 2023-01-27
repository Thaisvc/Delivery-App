import axios from 'axios';
import { getByKey } from '../utils/localStorage';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: { 'X-Custom-Header': 'foobar' },
});

const useApi = () => ({
  login: async (login, password) => {
    const response = await api.post('/login', { email: login, password });
    return response.data;
  },

  register: async (name, login, password, role) => {
    const response = await api.post('/registry', {
      email: login,
      password,
      name,
      role,
    });
    return response.data;
  },

  getProds: async () => {
    const response = await api.get('/products');
    return response.data;
  },

  getSales: async () => {
    const response = await api.get('/sales');
    return response.data;
  },

  getSellers: async () => {
    const response = await api.get('/sellers');
    return response.data;
  },

  createSale: async ({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, cartItems,
  }) => {
    const response = await api.post('/sales', {
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, cartItems,
    }, { headers: { authorization: getByKey('user').token } });
    return response.data;
  },
});

export default useApi;
