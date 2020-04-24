'use strict';
const axios = require("axios");

const formatData = data => {
	return{
		location: `${data.location.name},${data.location.country}`,
		temperature: data.current.temperature,
		condition: data.current.weather_descriptions[0],
		code: data.current.weather_code,
		windSpeed: data.current.wind_speed,
		pressure: data.current.pressure,
		humidity: data.current.humidity
	}
}

const getWeather = location => {
	return new Promise(async (resolve, reject) => {
		const params=
		{access_key: '9d0fdc6ba63847e8feb8458abeda2ed6',
		query: location}
		try{
			const weatherConditions = await axios.get(
				"http://api.weatherstack.com/current",
				{params});
			resolve(formatData(weatherConditions.data));
		} catch (error){
			reject(error);
		}
	});
}
  module.exports = getWeather;