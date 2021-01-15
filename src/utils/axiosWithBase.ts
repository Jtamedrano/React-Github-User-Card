import axios from 'axios';

export const axiosWithBase = () => {
  return axios.create({ baseURL: 'https://api.github.com/users/' });
};
