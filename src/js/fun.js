import axios from 'axios';
const apiKey = 'zZxRc8rGU85QuAgxPABLKNqbGZi9xk6p';
const BASE_URL = 'https://api.giphy.com/v1/stickers';


const fetchGif = () => {
  const resp = {};
  console.log("what the fuck guys ");
  axios.get(`${BASE_URL}/random?q=happy&api_key=${apiKey}`).then(res => console.log("hello",res))
  return resp
}

export {
  fetchGif
}
