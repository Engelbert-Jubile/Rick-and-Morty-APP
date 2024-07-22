import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async () => {
  const response = await axios.get(`${API_URL}/character`);
  return response.data;
};

export const fetchCharacterById = async (id) => {
  const response = await axios.get(`${API_URL}/character/${id}`);
  return response.data;
};
