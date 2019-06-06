import axios from 'axios';
const apiKey = 'zZxRc8rGU85QuAgxPABLKNqbGZi9xk6p';
const BASE_URL = 'https://api.giphy.com/v1/stickers';


const fetchGif = () => {
  const resp = axios.get(`${BASE_URL}/random?q=happy&api_key=${apiKey}`)
  return resp
}

export {
  fetchGif
}
