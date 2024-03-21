
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai';
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9b53e8eb3amsha1064b42379bd55p13a0d3jsn092185d77a12',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const cityName = document.getElementById('cityName');
const cloud_pct = document.getElementById('cloud_pct');
const temp = document.getElementById('temp');
const feels_like = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp');
const wind_speed = document.getElementById('wind_speed');
const wind_degrees = document.getElementById('wind_degrees');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');

const getWeather = async (city) => {
	cityName.innerHTML = city;

	try {
		const response = await fetch(url, options);
		const data = await response.json();
		console.log(data);
		temp.innerHTML = data.temp;
		temp2.innerHTML = data.temp;
		feels_like.innerHTML = data.feels_like;
		humidity.innerHTML = data.humidity;
		humidity2.innerHTML = data.humidity;
		min_temp.innerHTML = data.min_temp;
		max_temp.innerHTML = data.max_temp;
		wind_speed.innerHTML = data.wind_speed;
		wind_speed2.innerHTML = data.wind_speed;
		wind_degrees.innerHTML = data.wind_degrees;
		sunrise.innerHTML = data.sunrise;
		sunset.innerHTML = data.sunset;
	} catch (error) {
		console.error(error);
	}
};

const submit = document.getElementById('submit');
const cityInput = document.getElementById('city');

submit.addEventListener('click', (e) => {
	e.preventDefault();
	const cityValue = cityInput.value;
	getWeather(cityValue);
});

// Initial weather for Delhi
getWeather('kolkata');
