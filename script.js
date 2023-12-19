async function cityToCoordinates(city) {
  try {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=e1bf782dba0b2581aa1a22f60bc0bb70`;
    const rawData = await fetch(url);
    const data = await rawData.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function requestWeatherData(lat, lon) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=e1bf782dba0b2581aa1a22f60bc0bb70`;
    const rawData = await fetch(url);
    const data = await rawData.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

const input = document.querySelector("input");

input.addEventListener("keydown", async (event) => {
  if (event.code === "Enter") {
    const city = input.value.toLowerCase();
    input.value = "";

    const coordinatesData = await cityToCoordinates(city);
    const lat = coordinatesData[0].lat;
    const lon = coordinatesData[0].lon;

    const weatherData = await requestWeatherData(lat, lon);
    const currentTemperature = weatherData.main.temp;

    let temperatureDiv = document.querySelector("div.temperature");
    temperatureDiv.innerHTML = Math.round(currentTemperature) + "&#8451;";

    let cityDiv = document.querySelector("div.city");
    cityDiv.innerHTML = weatherData.name;

    let outputDiv = document.querySelector("div.output");
    outputDiv.style.display = "flex";
  }
});
