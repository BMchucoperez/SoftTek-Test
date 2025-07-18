import axios from 'axios';

const API_URL = 'https://rimac-front-end-challenge.netlify.app/api';

export const getUsuario = async () => {
  const response = await axios.get(`${API_URL}/user.json`);
  return response.data;
};

export const getPlans = async () => {
  const response = await axios.get(`${API_URL}/plans.json`);
  return response.data;
};