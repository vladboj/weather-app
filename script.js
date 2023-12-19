// key: d3f843a6b7a4493e94c162544231812

const input = document.querySelector("input");

async function requestData(url) {
  try {
    const rawData = await fetch(url);
    const data = await rawData.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

input.addEventListener("keydown", async (event) => {
  if (event.code === "Enter") {
    const city = input.value.toLowerCase();
    input.value = "";

    const url = `http://api.weatherapi.com/v1/current.json?key=d3f843a6b7a4493e94c162544231812&q=${city}`;

    const data = await requestData(url);

    let temperatureDiv = document.querySelector("div.temperature");
    temperatureDiv.innerHTML = data.current.temp_c + "&#8451;";

    let cityDiv = document.querySelector("div.city");
    cityDiv.innerHTML = data.location.name;

    let outputDiv = document.querySelector("div.output");
    outputDiv.style.display = "flex";
  }
});
