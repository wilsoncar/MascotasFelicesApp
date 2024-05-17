import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'

const api = axios.create({
  baseURL: API_BASE_URL, // Cambia esto por la URL de tu API de Django
  timeout: 1000,
});

export const getOwners = async () => {
  const response = await fetch(`${API_BASE_URL}/duenos/`);
  return await response.json();
};

export const getOwnerDetails = async (id) => {
  const response = await fetch(`${API_BASE_URL}/duenos/${id}/`);
  return await response.json();
};

export default api;