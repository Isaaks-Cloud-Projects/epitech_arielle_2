import axios from 'axios';

const API_URL = 'http://localhost:5050';

export const getEvents = () => axios.get(`${API_URL}/events`);
export const createEvent = (eventData) => axios.post(`${API_URL}/events`, eventData);
export const updateEvent = (oldType, newType) => axios.put(`${API_URL}/events`, { oldType, newType });
export const deleteEvent = (type) => axios.delete(`${API_URL}/events`, { data: { type } });
