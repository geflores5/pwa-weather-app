import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const key = process.env.REACT_APP_PWA_WEATHER

const fetchWeather = async (query) => {
  const response = await axios.get(URL, {
    params: {
      q: query,
      units: 'imperial',
      APPID: key
    }
  });

  return response.data
}

export default fetchWeather;