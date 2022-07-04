function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "74fb52063cc6d812d7470c563e6befc0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axious.get(apiUrl).then(displayTemperature);
