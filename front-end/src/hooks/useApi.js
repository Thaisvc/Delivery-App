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

  validateSavedToken: async () => {
    try {
      const localUser = getByKey('user');
      if (localUser) {
        const response = await api
          .patch('/login', {}, { headers: { authorization: localUser.token } });
        return { response: response.data };
      }
      return false;
    } catch (error) {
      console.log(error);
    }
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

  registerAdm: async (name, login, password, role) => {
    const Token = getByKey('user');
    if (!Token) { return 'token is required'; }
    const response = await api.post(
      '/register',
      {
        email: login,
        password,
        name,
        role,
      },
      { headers: { Authorization: getByKey('user').token } },

    );
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

  getSaleProds: async (id) => {
    const response = await api.get(`/sales/${id}`);
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
