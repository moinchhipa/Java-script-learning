let btn = document.querySelector("#sub");
let inp = document.querySelector("input");
let cityname = document.querySelector("#city-name");
let temp = document.querySelector("#temp");
let icon = document.querySelector(".icon");
let humi = document.querySelector("#humidity");
let wind = document.querySelector("#wind-speed");

btn.addEventListener("click", () => {
  checkWeather(inp.value.trim());
});

inp.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    checkWeather(inp.value.trim());
  }
});

async function checkWeather(city) {
  try {
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=f9151141ee9891d9c7809a0cbc1449af&units=metric";
    const response = await fetch(url);

    if (response.status === 404) {
      alert("City not found");
      return;
    }

    const data = await response.json();
    console.log(data);

    cityname.innerText = data.name;
    temp.innerText = Math.round(data.main.temp) + "°";
    humi.innerText = data.main.humidity + "%";
    wind.innerText = data.wind.speed + "km/h";
    icon.src =
      "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
  } catch (error) {
    console.error("Error fetching weather", error);
  }
}
