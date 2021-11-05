import axios from 'axios';
import localStorageHelper from './localStorageHelper';

const { REACT_APP_API_URL } = process.env;

const axiosConfig = () => {
  const token = localStorageHelper.get('token');

  return {
    headers: {
      Authorization: token,
    },
  };
};

const getFromApi = async (endpoint) => {
  try {
    const { data } = await axios.get(`${REACT_APP_API_URL}${endpoint}`, axiosConfig());

    return data;
  } catch (error) {
    return error.response.data;
  }
};

const postToApi = async (endpoint, payload) => {
  try {
    const { data } = await axios.post(`${REACT_APP_API_URL}${endpoint}`, payload, axiosConfig());

    return data;
  } catch (error) {
    return error.response.data;
  }
};

const deleteFromApi = async (endpoint) => {
  try {
    const { data } = await axios.delete(`${REACT_APP_API_URL}${endpoint}`, axiosConfig());

    return data;
  } catch (error) {
    return error.response.data;
  }
};

const patchFromApi = async (endpoint, payload) => {
  try {
    const { data } = await axios.patch(`${REACT_APP_API_URL}${endpoint}`, payload, axiosConfig());

    return data;
  } catch (error) {
    return error.response.data;
  }
};

export default {
  getFromApi,
  postToApi,
  deleteFromApi,
  patchFromApi,
};
