import axios from 'axios';

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
});

export default useApi;
