//const apiKey = "04d339f657c775f17ddabc5dfafd7b7f";
//const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//http://api.weatherapi.com/v1/current.json?key=2dec41742fab4080bc9110009230105&q=${targetLocation}&aqi=no

const apiKey = "2dec41742fab4080bc9110009230105";
const apiUrl = "https://api.weatherapi.com/v1/current.json?key=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const audio = document.querySelector(".audio");

async function checkWeather(city) {
    const response = await fetch(apiUrl + apiKey + "&q=" + city + "&aqi=no");

    var data = await response.json();

    if (data.error) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        
        console.log(data);

        document.querySelector(".city").innerHTML = data.location.name + ", " + data.location.country;
        document.querySelector(".temp").innerHTML = data.current.temp_c + "&#176;C";
        document.querySelector(".feels-like-temp").innerHTML = "Feels like " + data.current.feelslike_c + "&#176;C";
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".wind-speed").innerHTML = data.current.wind_kph + "kmph";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + data.location.name + "')";


        if (data.current.condition.text == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.current.condition.text == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.current.condition.text == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.current.condition.text == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        else if (data.current.condition.text == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.current.condition.text == "Snow") {
            weatherIcon.src = "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
    audio.play();
})


