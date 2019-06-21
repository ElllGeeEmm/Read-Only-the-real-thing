import axios from 'axios';
const apiKey = 'zZxRc8rGU85QuAgxPABLKNqbGZi9xk6p';
const BASE_URL = 'https://api.giphy.com/v1/stickers/trending';


const fetchGif = () => {
  const resp = axios.get(`${BASE_URL}?api_key=${apiKey}`)
  return resp
}

export {
  fetchGif
}
