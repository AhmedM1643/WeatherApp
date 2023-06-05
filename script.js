let degree = document.querySelector(".degree");
let windSpeed = document.querySelector(".wind-speed");
let cityInput = document.getElementById("city-input");
let humidity = document.querySelector(".humidity");
let country = document.querySelector(".country");
let description = document.querySelector(".description")

function check(city) {
    const KEY = 'a86252eefe057a4eaf63908c4872bb6e';
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
    let req = new XMLHttpRequest();
    req.open("GET", API);
    req.send()
    req.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.responseText))
            const weather = JSON.parse(this.responseText)
            windSpeed.textContent = `${weather.wind.speed}Km/H Wind Speed`
            humidity.innerHTML = `${weather.main.humidity}%`
            degree.textContent = `${(weather.main.temp - 273.15).toFixed(2)}°C`;
            country.innerHTML = `Country: ${weather.sys.country}`;
            description.innerHTML = `<i class="fa-solid fa-cloud mr-4"></i>${Object.values(weather.weather)[0].description}`
        }
    }
}

document.forms[0].addEventListener("submit", (e) => {
    e.preventDefault();
    check(cityInput.value);
});


// a86252eefe057a4eaf63908c4872bb6e
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=a86252eefe057a4eaf63908c4872bb6e
