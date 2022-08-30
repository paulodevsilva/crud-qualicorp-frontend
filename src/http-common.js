import axios from 'axios';

export default axios.create({
  baseURL: 'https://crud-qualicorp.herokuapp.com/api',
  headers: {
    'Content-type': 'application/json',
  },
});
