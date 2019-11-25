import axios from 'axios';
const ip = 'http://localhost:5000/job/';

export const fetch = () => {
  return {
    type: 'FETCH_JOB',
    payload: axios.get(ip),
  };
};

export const searchJob = words => {
  return {
    type: 'FETCH_JOB',
    payload: axios.get(`${ip}?by=name&words=${words}`),
  };
};
