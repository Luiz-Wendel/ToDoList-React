import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const axiosConfig = (token) => ({
  headers: {
    Authorization: token,
  },
});

const getFromApi = async (endpoint, token) => {
  try {
    const { data } = await axios.get(`${REACT_APP_API_URL}${endpoint}`, axiosConfig(token));

    return data;
  } catch (error) {
    return error.response.data;
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
