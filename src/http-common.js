import axios from 'axios';

export default axios.create({
  baseURL: process.env.BASE_URL || 'https://crud-qualicorp.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});
