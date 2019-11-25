import axios from 'axios';
const ip = 'http://localhost:5000/category/';

export const fetch = () => {
  return {
    type: 'FETCH_CATEGORIES',
    payload: axios.get(ip),
  };
};
