import axios from 'axios';
const ip = 'http://localhost:5000/company/';

export const fetch = () => {
  return {
    type: 'FETCH_COMPANIES',
    payload: axios.get(ip),
  };
};

export const searchCompanies = words => {
  return {
    type: 'FETCH_COMPANIES',
    payload: axios.get(`${ip}?by=name&words=${words}`),
  };
};
