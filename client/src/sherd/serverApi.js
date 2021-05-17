import axios from 'axios';

const url = 'http://localhost:5000';

export const signup = async (user) => {
  try {
    const innerData = await axios.post(`${url}/api/users`, user);
    console.log(innerData);
  } catch (e) {
    console.log(e.response.data);
    return e.response.data;
  }
};

export const login = async (user) => {
  try {
    const innerData = await axios.post(`${url}/api/auth`, user);
    return innerData;
  } catch (e) {
    console.log(e.response.data.msg);
    return e.response.data;
  }
};
