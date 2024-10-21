const button = document.getElementById("buttonForMap");


function WeatherFunction() {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=15.61287516898284&lon=58.411616852847736&appid=df4c0154d893ba9c3ae1e611a27a169b")
        .then((response) => response.json())  // Parse the JSON directly
        .then((weatherData) => {
            const weatherText = document.getElementById("weatherText"); // Assuming you have an element with this ID
            if (weatherData.weather[0].description == "thunderstorm with light rain") {
                weatherText.innerHTML = "åskväder med lätt regn";
            }
            else if (weatherData.weather[0].description == "thunderstorm with light rain") {
                weatherText.innerHTML = "åskväder med lätt regn";
            }
            else if (weatherData.weather[0].description == "thunderstorm with rain") {
                weatherText.innerHTML = "åskväder med regn";
            }
            else if (weatherData.weather[0].description == "thunderstorm with heavy rain") {
                weatherText.innerHTML = "åskväder med kraftigt regn";
            }
            else if (weatherData.weather[0].description == "light thunderstorm") {
                weatherText.innerHTML = "lätt åskväder";
            }
            else if (weatherData.weather[0].description == "thunderstorm") {
                weatherText.innerHTML = "åskväder";
            }
            else if (weatherData.weather[0].description == "heavy thunderstorm ") {
                weatherText.innerHTML = "kraftigt åskväder";
            }
            else if (weatherData.weather[0].description == "ragged thunderstorm") {
                weatherText.innerHTML = "ojämnt åskväder";
            }
            else if (weatherData.weather[0].description == "thunderstorm with light drizzle ") {
                weatherText.innerHTML = "åskväder med lätt duggregn";
            }
            else if (weatherData.weather[0].description == "thunderstorm with drizzle") {
                weatherText.innerHTML = "åskväder med duggregn";
            }
            else if (weatherData.weather[0].description == "thunderstorm with heavy drizzle") {
                weatherText.innerHTML = "blixtoväder med kraftigt duggregn";
            }
            else if (weatherData.weather[0].description == "light intensity drizzle") {
                weatherText.innerHTML = "lätt duggregn";
            }
            else if (weatherData.weather[0].description == "drizzle") {
                weatherText.innerHTML = "duggregn";
            }
            else if (weatherData.weather[0].description == "heavy intensity drizzle ") {
                weatherText.innerHTML = "kraftigt duggregn";
            }
            else if (weatherData.weather[0].description == "drizzle rain ") {
                weatherText.innerHTML = "duggregn";
            }
            else if (weatherData.weather[0].description == "heavy intensity drizzle rain ") {
                weatherText.innerHTML = "kraftigt duggregn";
            }
            else if (weatherData.weather[0].description == "shower rain and drizzle") {
                weatherText.innerHTML = "regnskurar och duggregn";
            }
            else if (weatherData.weather[0].description == "heavy shower rain and drizzle") {
                weatherText.innerHTML = "tunga regnskurar och duggregn";
            }
            else if (weatherData.weather[0].description == "shower drizzle") {
                weatherText.innerHTML = "duggregnskurar";
            }
            else if (weatherData.weather[0].description == "light rain") {
                weatherText.innerHTML = "lätt regn";
            }
            else if (weatherData.weather[0].description == "moderate rain") {
                weatherText.innerHTML = "måttligt regn";
            }
            else if (weatherData.weather[0].description == "heavy intensity rain") {
                weatherText.innerHTML = "kraftigt regn";
            }
            else if (weatherData.weather[0].description == "very heavy rain") {
                weatherText.innerHTML = "väldigt kraftigt regn";
            }
            else if (weatherData.weather[0].description == "extreme rain") {
                weatherText.innerHTML = "extremt regn";
            }
            else if (weatherData.weather[0].description == "freezing rain") {
                weatherText.innerHTML = "underkylt regn";
            }
            else if (weatherData.weather[0].description == "light intensity shower rain ") {
                weatherText.innerHTML = "lätta regnskurar";
            }
            else if (weatherData.weather[0].description == "shower rain") {
                weatherText.innerHTML = "regnskurar";
            }
            else if (weatherData.weather[0].description == "heavy intensity shower rain ") {
                weatherText.innerHTML = "tunga regnskurar";
            }
            else if (weatherData.weather[0].description == "ragged shower rain") {
                weatherText.innerHTML = "ojämna regnskurar";
            }
            else if (weatherData.weather[0].description == "light snow") {
                weatherText.innerHTML = "lätt snöfall";
            }
            else if (weatherData.weather[0].description == "snow") {
                weatherText.innerHTML = "snöfall";
            }
            else if (weatherData.weather[0].description == "heavy snow") {
                weatherText.innerHTML = "tungt snöfall";
            }
            else if (weatherData.weather[0].description == "sleet ") {
                weatherText.innerHTML = "snöblandat regn";
            }
            else if (weatherData.weather[0].description == "light shower sleet ") {
                weatherText.innerHTML = "lätta skurar med snöblandat regn";
            }
            else if (weatherData.weather[0].description == "shower sleet ") {
                weatherText.innerHTML = "snöblandade regnskurar";
            }
            else if (weatherData.weather[0].description == "light rain and snow ") {
                weatherText.innerHTML = "lätt regn och snö";
            }
            else if (weatherData.weather[0].description == "rain and snow") {
                weatherText.innerHTML = "regn och snö";
            }
            else if (weatherData.weather[0].description == "light shower snow ") {
                weatherText.innerHTML = "lätta snöskurar";
            }
            else if (weatherData.weather[0].description == "shower snow") {
                weatherText.innerHTML = "snöskurar";
            }
            else if (weatherData.weather[0].description == "heavy shower snow") {
                weatherText.innerHTML = "kraftiga snöskurar";
            }
            else if (weatherData.weather[0].description == "mist") {
                weatherText.innerHTML = "dimma";
            }
            else if (weatherData.weather[0].description == "smoke") {
                weatherText.innerHTML = "rök";
            }
            else if (weatherData.weather[0].description == "haze") {
                weatherText.innerHTML = "dis";
            }
            else if (weatherData.weather[0].description == "fog") {
                weatherText.innerHTML = "dimma";
            }
            else if (weatherData.weather[0].description == "sand") {
                weatherText.innerHTML = "sand";
            }
            else if (weatherData.weather[0].description == "dust") {
                weatherText.innerHTML = "damm";
            }
            else if (weatherData.weather[0].description == "volcanic ash") {
                weatherText.innerHTML = "vulkanisk aska";
            }
            else if (weatherData.weather[0].description == "squalls") {
                weatherText.innerHTML = "stormar";
            }
            else if (weatherData.weather[0].description == "tornado") {
                weatherText.innerHTML = "tornado";
            }
            else if (weatherData.weather[0].description == "clear sky ") {
                weatherText.innerHTML = "klara skyar";
            }
            else if (weatherData.weather[0].description == "few clouds: 11-25%") {
                weatherText.innerHTML = "några moln: 11-25%";
            }
            else if (weatherData.weather[0].description == "scattered clouds: 25-50%") {
                weatherText.innerHTML = "spridda moln: 25-50%";
            }
            else if (weatherData.weather[0].description == "broken clouds: 51-84%") {
                weatherText.innerHTML = "brutna moln: 51-84%";
            }
            else if (weatherData.weather[0].description == "overcast clouds: 85-100% ") {
                weatherText.innerHTML = "mulna moln: 85-100% ";
            }
        })
        .catch((error) => console.log("Error fetching weather data:", error));

}

function OpenMap() {
    const form = document.getElementById("map");

    if (form.style.display == "flex") {
        form.style.display = "none";
        button.innerHTML = "Öppna karta";
    }
    else {
        form.style.display = "flex";
        button.innerHTML = "Stäng";
    }
}