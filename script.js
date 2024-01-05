document.addEventListener('DOMContentLoaded', getWeather);

async function getWeather() {
  const apiKey = 'YOUR_API_KEY'; // Replace with your API key
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY&units=metric&appid=' + apiKey; // Replace YOUR_CITY with your city name

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    const location = data.name + ', ' + data.sys.country;
    const temperature = data.main.temp + '°C';
    const description = data.weather[0].description;

    document.getElementById('location').innerText = location;
    document.getElementById('temperature').innerText = temperature;
    document.getElementById('description').innerText = description;
  } catch (error) {
    console.log('Error fetching weather data:', error);
  }
}