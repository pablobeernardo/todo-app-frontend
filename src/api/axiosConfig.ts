import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todo-app-backend-9k3s.onrender.com/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
