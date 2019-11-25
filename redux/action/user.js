import axios from 'axios';

export const getUser = () => {
  return {
    type: 'GET_USER',
    payload: axios.get('http://localhost:5000/user'),
  };
};

export const addUser = account => {
  return {
    type: 'ADD_USER',
    payload: axios.post('http://localhost:5000/user/', account),
  };
};

export const loginUser = (email, password) => {
  return {
    type: 'ADD_USER',
    payload: axios.post('http://localhost:5000/User/login', {email, password}),
  };
};
