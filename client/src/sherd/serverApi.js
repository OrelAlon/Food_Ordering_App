import axios from 'axios';

const url = 'http://localhost:5000';

export const signup = async (user) => {
  try {
    const innerData = await axios.post(`${url}/api/users`, user);
    console.log(innerData);
  } catch (e) {
    console.log(e);
  }
};

export const login = async (user) => {
  const innerData = await axios.post(`${url}/api/auth`, user);
  return innerData;
};
