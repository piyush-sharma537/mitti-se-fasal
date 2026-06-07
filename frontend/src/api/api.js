import axios from 'axios';

const API_BASE_URL = 'https://mitti-se-fasal.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchSoils = async () => {
  try {
    const response = await api.get('/soils');
    return response.data;
  } catch (error) {
    console.error('Error fetching soils:', error);
    throw error;
  }
};

export const fetchCropsBySoil = async (soilId) => {
  try {
    const response = await api.get(`/crops/${soilId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching crops for soil ${soilId}:`, error);
    throw error;
  }
};

export const fetchCropDetails = async (soilId, cropIndex) => {
  try {
    const response = await api.get(`/crops/${soilId}/${cropIndex}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching crop details for soil ${soilId} at index ${cropIndex}:`, error);
    throw error;
  }
};

export default api;
