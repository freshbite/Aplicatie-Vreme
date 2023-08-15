let result = document.getElementById("result");
let searchBtn = document.getElementById("Cauta");
let cityRef = document.getElementById("numeOras");
let princ = document.getElementsByClassName("principal");

let municipiu = document.getElementById("Oras");
let ora = document.getElementById("Ora");
let vreme = document.getElementById("Vreme");
let temp = document.getElementById("Temp");
let min = document.getElementById("Min");
let max = document.getElementById("Max");
let vant = document.getElementById("Vant");

let getWeather = () => {
  
  let cityValue = cityRef.value;

  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  }

  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric&lang=ro`;
    cityRef.value = "";
  
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
      console.log(data);
      
      municipiu.innerHTML = `${data.name}`;
      ora.innerHTML = ` <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
      vreme.innerHTML = `${data.weather[0].description}`;
      temp.innerHTML = `${data.main.temp}&#176`;
      min.innerHTML = `Min<br>${data.main.temp_min}&#176`;
      max.innerHTML = `Max<br>${data.main.temp_max}&#176`; 
      vant.innerHTML = `Viteza Vantului: ${data.wind.speed} km/h`;
    })

      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);