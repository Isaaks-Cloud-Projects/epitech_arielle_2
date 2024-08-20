import axios from 'axios';

const API_URL = 'http://localhost:5050';

export const getUsers = () => axios.get(`${API_URL}/users`);
export const createUser = (nom, age) => axios.post(`${API_URL}/users`, { nom, age });
export const updateUser = (nom, age) => axios.put(`${API_URL}/users`, { nom, age });
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);
