import axios from "axios";
import { WEATHER_API_KEY } from "../constants";
import { fetchDataSuccess, fetchDataError } from "./action";

export const fetchGetWeatherInfo = (lat, lon) => async dispatch => {
  try{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,current&units=metric&appid=${WEATHER_API_KEY}`)
    return dispatch(fetchDataSuccess(response.data));  

  }  
  catch(error) {
    return dispatch(fetchDataError(error));
  }
}