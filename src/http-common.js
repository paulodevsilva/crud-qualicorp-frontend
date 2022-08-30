import axios from 'axios';

export default axios.create({
  baseURL: 'https://crud-qualicorp.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});
