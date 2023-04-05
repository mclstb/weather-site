//Week 4 - Feature #1
//In your project, display the current date and time using JavaScript: Tuesday 16:00
let today = document.querySelector("div .date");
let now = new Date();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novermber",
  "December",
];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
let hour = now.getHours();
let minutes = now.getMinutes();

today.innerHTML = `${month} ${date}, ${year} - ${hour}:${minutes}`;

//Week 5
//When a user searches for a city, it should display the name of the city on the result page and the current temperature of the city.

function search(Event) {
  Event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  let inputLower = searchInput.value.toLowerCase().trim();
  h1.innerHTML = inputLower.charAt(0).toUpperCase() + inputLower.slice(1);

  let apiKey = "b40b135798f82a05aed08769f9275f50";
  let units = "metric";
  let currentCity = searchInput.value;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#city-search");
form.addEventListener("submit", search);

function showTemperature(response) {
  let currentTemperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = `${currentTemperature}`;
  let cityElement = document.querySelector(".current-city");
  temperatureElement.innerHTML = `${currentTemperature}`;
  cityElement.innerHTML = `${response.data.name}`;
}

//Bonus

let currentCityButton = document.getElementById("current-city-button");
currentCityButton.onclick = function () {
  navigator.geolocation.getCurrentPosition(currentLocation);
};

function currentLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}
