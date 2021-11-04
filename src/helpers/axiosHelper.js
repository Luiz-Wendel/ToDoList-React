import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const axiosConfig = (token) => ({
  headers: {
    Authorization: token,
  },
});

const getFromApi = async (endpoint, token) => {
  try {
    const response = await axios.get(`${REACT_APP_API_URL}${endpoint}`, axiosConfig(token));

    return response;
  } catch (error) {
    return error;
  }
};

const postToApi = async (endpoint, payload, token) => {
  try {
    const { data } = await axios.post(`${REACT_APP_API_URL}${endpoint}`, payload, axiosConfig(token));

    return data;
  } catch (error) {
    return error.response.data;
  }
};

export default { getFromApi, postToApi };
