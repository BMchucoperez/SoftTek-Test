import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getUsuario = async () => {
  const response = await axios.get(`${API_URL}/user.json`);
  return response.data;
};

export const getPlans = async () => {
  const response = await axios.get(`${API_URL}/plans.json`);
  return response.data;
};