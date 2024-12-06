const apiKey = "dc870223e3c5cb24ee61b8734a9dcac7"; 

document.getElementById('searchBtn').addEventListener('click', function () {
  const city = document.getElementById('cityInput').value;
  if (!city) {
    alert('Please enter a city name');
    return;
  }
  fetchWeather(city);
});

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    updateWeatherInfo(data);
  } catch (error) {
    alert(error.message);
  }
}

function updateWeatherInfo(data) {
  document.getElementById('temperature').textContent = `${data.main.temp}°C`;
  document.getElementById('tempRange').textContent = `↑ ${data.main.temp_max} ↓ ${data.main.temp_min}`;
  document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  document.getElementById('humidity').textContent = `${data.main.humidity}%`;
  document.getElementById('feelsLike').textContent = `${data.main.feels_like}°C`;
  document.getElementById('cloudiness').textContent = `${data.clouds.all}%`;
  document.getElementById('windSpeed').textContent = `${data.wind.speed} m/s`;
} 