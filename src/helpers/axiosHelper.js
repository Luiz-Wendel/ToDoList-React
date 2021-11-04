import axios from 'axios';
import localStorageHelper from './localStorageHelper';

const { REACT_APP_API_URL } = process.env;

const token = localStorageHelper.get('token');

const axiosConfig = {
  headers: {
    Authorization: token,
  },
};

const getFromApi = async (endpoint) => {
  try {
    const { data } = await axios.get(`${REACT_APP_API_URL}${endpoint}`, axiosConfig);

    return data;
  } catch (error) {
    return error.response.data;
  }
};

const postToApi = async (endpoint, payload) => {
  try {
    const { data } = await axios.post(`${REACT_APP_API_URL}${endpoint}`, payload, axiosConfig);

    return data;
  } catch (error) {
    return error.response.data;
  }
};

export default { getFromApi, postToApi };
