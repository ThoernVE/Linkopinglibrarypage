const button = document.getElementById("buttonForMap");


function WeatherFunction() {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=15.61287516898284&lon=58.411616852847736&appid=df4c0154d893ba9c3ae1e611a27a169b")
        .then((response) => response.json())  // Parse the JSON directly
        .then((weatherData) => {
            const weatherText = document.getElementById("weatherText"); // Assuming you have an element with this ID
            translationSwitchCase(weatherData.weather[0].description)})

}

function translationSwitchCase(weatherENG)
{
    switch (weatherENG)
    {
        case "thunderstorm with light rain":
            weatherText.innerHTML = "åskväder med lätt regn";
            break;  
            
        case "thunderstorm with light rain":
            weatherText.innerHTML = "åskväder med lätt regn";
            break;

        case "thunderstorm with rain":
            weatherText.innerHTML = "åskväder med regn";
            break;
        
        case "thunderstorm with heavy rain":
            weatherText.innerHTML = "åskväder med kraftigt regn";
            break;

        case "light thunderstorm":
            weatherText.innerHTML = "lätt åskväder";
            break;

        case "thunderstorm":
             weatherText.innerHTML = "åskväder"
             break;

        case "heavy thunderstorm":
            weatherText.innerHTML = "kraftigt åskväder";
            break;

        case "ragged thunderstorm":
             weatherText.innerHTML = "ojämnt åskväder";
             break;

        case "thunderstorm with light drizzle":
            weatherText.innerHTML = "åskväder med lätt duggregn";
            break;

        case "thunderstorm with drizzle":
            weatherText.innerHTML = "åskväder med duggregn";
            break;

        case "thunderstorm with heavy drizzle":
            weatherText.innerHTML = "blixtoväder med kraftigt duggregn";
            break;

        case "light intensity drizzle":
            weatherText.innerHTML = "lätt duggregn";
            break;

        case "drizzle":
            weatherText.innerHTML = "duggregn";
            break;

        case "heavy intensity drizzle":
            weatherText.innerHTML = "kraftigt duggregn";
            break;

        case "drizzle rain":
            weatherText.innerHTML = "duggregn";
            break;

        case "heavy intensity drizzle rain":
            weatherText.innerHTML = "kraftigt duggregn";
            break;

        case "shower rain and drizzle":
            weatherText.innerHTML = "regnskurar och duggregn";
            break;

        case "heavy shower rain and drizzle":
            weatherText.innerHTML = "tunga regnskurar och duggregn";
            break;

        case "shower drizzle":
            weatherText.innerHTML = "duggregnskurar";
            break;

        case "light rain":
            weatherText.innerHTML = "lätt regn";
            break;

        case "moderate rain":
            weatherText.innerHTML = "måttligt regn";
            break;

        case "heavy intensity rain":
            weatherText.innerHTML = "kraftigt regn";
            break;

        case "very heavy rain":
            weatherText.innerHTML = "väldigt kraftigt regn";
            break;

        case "extreme rain":
            weatherText.innerHTML = "extremt regn";
            break;

        case "freezing rain":
            weatherText.innerHTML = "underkylt regn";
            break;

        case "light intensity shower rain":
            weatherText.innerHTML = "lätta regnskurar";
            break;

        case "shower rain":
            weatherText.innerHTML = "regnskurar";
            break;

        case "heavy intensity shower rain":
            weatherText.innerHTML = "tunga regnskurar";
            break;

        case "ragged shower rain":
            weatherText.innerHTML = "ojämna regnskurar";
            break;

        case "light snow":
            weatherText.innerHTML = "lätt snöfall";
            break;

        case "snow":
            weatherText.innerHTML = "snöfall";
            break;

        case "heavy snow":
            weatherText.innerHTML = "tungt snöfall";
            break;

        case "sleet":
            weatherText.innerHTML = "snöblandat regn";
            break;

        case "light shower sleet":
            weatherText.innerHTML = "lätta skurar med snöblandat regn";
            break;

        case "shower sleet":
            weatherText.innerHTML = "snöblandade regnskurar";
            break;

        case "light rain and snow":
            weatherText.innerHTML = "lätt regn och snö";
            break;

        case "rain and snow":
            weatherText.innerHTML = "regn och snö";
            break;

        case "light shower snow":
            weatherText.innerHTML = "lätta snöskurar";
            break;

        case "shower snow":
            weatherText.innerHTML = "snöskurar";
            break;

        case "heavy shower snow":
            weatherText.innerHTML = "kraftiga snöskurar";
            break;

        case "mist":
            weatherText.innerHTML = "dimma";
            break;

        case "smoke":
            weatherText.innerHTML = "rök";
            break;

        case "haze":
            weatherText.innerHTML = "dis";
            break;

        case "fog":
            weatherText.innerHTML = "dimma";
            break;

        case "sand":
            weatherText.innerHTML = "sand";
            break;

        case "dust":
            weatherText.innerHTML = "damm";
            break;

        case "volcanic ash":
            weatherText.innerHTML = "vulkanisk aska";
            break;

        case "squalls":
            weatherText.innerHTML = "stormar";
            break;

        case "tornado":
            weatherText.innerHTML = "tornado";
            break;

        case "clear sky":
            weatherText.innerHTML = "klara skyar";
            break;

        case "few clouds: 11-25%":
            weatherText.innerHTML = "några moln: 11-25%";
            break;

        case "scattered clouds: 25-50%":
            weatherText.innerHTML = "spridda moln: 25-50%";
            break;

        case "broken clouds: 51-84%":
            weatherText.innerHTML = "brutna moln: 51-84%";
            break;

         case "overcast clouds: 85-100%":
            weatherText.innerHTML = "brutna moln: 51-84%";
            break;

        case "overcast clouds: 85-100%":
            weatherText.innerHTML = "mulna moln: 85-100% ";
            break;

        default:
            weatherText.innerHTML = "weatherservice is offline"
            break;


    }


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

/* case 1:
        if (weatherENG == "thunderstorm with light rain") {
        weatherText.innerHTML = "åskväder med lätt regn";
    }
    else if (weatherENG == "thunderstorm with light rain") {
        weatherText.innerHTML = "åskväder med lätt regn";
    }
    else if (weatherENG == "thunderstorm with rain") {
        weatherText.innerHTML = "åskväder med regn";
    }
    else if (weatherENG == "thunderstorm with heavy rain") {
        weatherText.innerHTML = "åskväder med kraftigt regn";
    }
    else if (weatherENG == "light thunderstorm") {
        weatherText.innerHTML = "lätt åskväder";
    }
    else if (weatherENG == "thunderstorm") {
        weatherText.innerHTML = "åskväder";
    }
    else if (weatherENG == "heavy thunderstorm ") {
        weatherText.innerHTML = "kraftigt åskväder";
    }
    else if (weatherENG == "ragged thunderstorm") {
        weatherText.innerHTML = "ojämnt åskväder";
    }
    else if (weatherENG == "thunderstorm with light drizzle ") {
        weatherText.innerHTML = "åskväder med lätt duggregn";
    }
    else if (weatherENG == "thunderstorm with drizzle") {
        weatherText.innerHTML = "åskväder med duggregn";
    }
    else if (weatherENG == "thunderstorm with heavy drizzle") {
        weatherText.innerHTML = "blixtoväder med kraftigt duggregn";
    }
    else if (weatherENG == "light intensity drizzle") {
        weatherText.innerHTML = "lätt duggregn";
    }
    else if (weatherENG == "drizzle") {
        weatherText.innerHTML = "duggregn";
    }
    else if (weatherENG == "heavy intensity drizzle ") {
        weatherText.innerHTML = "kraftigt duggregn";
    }
    else if (weatherENG == "drizzle rain ") {
        weatherText.innerHTML = "duggregn";
    }
    else if (weatherENG == "heavy intensity drizzle rain ") {
        weatherText.innerHTML = "kraftigt duggregn";
    }
    else if (weatherENG == "shower rain and drizzle") {
        weatherText.innerHTML = "regnskurar och duggregn";
    }
    else if (weatherENG == "heavy shower rain and drizzle") {
        weatherText.innerHTML = "tunga regnskurar och duggregn";
    }
    else if (weatherENG == "shower drizzle") {
        weatherText.innerHTML = "duggregnskurar";
    }
    else if (weatherENG == "light rain") {
        weatherText.innerHTML = "lätt regn";
    }
    else if (weatherENG == "moderate rain") {
        weatherText.innerHTML = "måttligt regn";
    }
    else if (weatherENG == "heavy intensity rain") {
        weatherText.innerHTML = "kraftigt regn";
    }
    else if (weatherENG == "very heavy rain") {
        weatherText.innerHTML = "väldigt kraftigt regn";
    }
    else if (weatherENG == "extreme rain") {
        weatherText.innerHTML = "extremt regn";
    }
    else if (weatherENG == "freezing rain") {
        weatherText.innerHTML = "underkylt regn";
    }
    else if (weatherENG == "light intensity shower rain ") {
        weatherText.innerHTML = "lätta regnskurar";
    }
    else if (weatherENG == "shower rain") {
        weatherText.innerHTML = "regnskurar";
    }
    else if (weatherENG == "heavy intensity shower rain ") {
        weatherText.innerHTML = "tunga regnskurar";
    }
    else if (weatherENG == "ragged shower rain") {
        weatherText.innerHTML = "ojämna regnskurar";
    }
    else if (weatherENG == "light snow") {
        weatherText.innerHTML = "lätt snöfall";
    }
    else if (weatherENG == "snow") {
        weatherText.innerHTML = "snöfall";
    }
    else if (weatherENG == "heavy snow") {
        weatherText.innerHTML = "tungt snöfall";
    }
    else if (weatherENG == "sleet ") {
        weatherText.innerHTML = "snöblandat regn";
    }
    else if (weatherENG == "light shower sleet ") {
        weatherText.innerHTML = "lätta skurar med snöblandat regn";
    }
    else if (weatherENG == "shower sleet ") {
        weatherText.innerHTML = "snöblandade regnskurar";
    }
    else if (weatherENG == "light rain and snow ") {
        weatherText.innerHTML = "lätt regn och snö";
    }
    else if (weatherENG == "rain and snow") {
        weatherText.innerHTML = "regn och snö";
    }
    else if (weatherENG == "light shower snow ") {
        weatherText.innerHTML = "lätta snöskurar";
    }
    else if (weatherENG == "shower snow") {
        weatherText.innerHTML = "snöskurar";
    }
    else if (weatherENG == "heavy shower snow") {
        weatherText.innerHTML = "kraftiga snöskurar";
    }
    else if (weatherENG == "mist") {
        weatherText.innerHTML = "dimma";
    }
    else if (weatherENG == "smoke") {
        weatherText.innerHTML = "rök";
    }
    else if (weatherENG == "haze") {
        weatherText.innerHTML = "dis";
    }
    else if (weatherENG == "fog") {
        weatherText.innerHTML = "dimma";
    }
    else if (weatherENG == "sand") {
        weatherText.innerHTML = "sand";
    }
    else if (weatherENG == "dust") {
        weatherText.innerHTML = "damm";
    }
    else if (weatherENG == "volcanic ash") {
        weatherText.innerHTML = "vulkanisk aska";
    }
    else if (weatherENG == "squalls") {
        weatherText.innerHTML = "stormar";
    }
    else if (weatherENG == "tornado") {
        weatherText.innerHTML = "tornado";
    }
    else if (weatherENG == "clear sky ") {
        weatherText.innerHTML = "klara skyar";
    }
    else if (weatherENG == "few clouds: 11-25%") {
        weatherText.innerHTML = "några moln: 11-25%";
    }
    else if (weatherENG == "scattered clouds: 25-50%") {
        weatherText.innerHTML = "spridda moln: 25-50%";
    }
    else if (weatherENG == "broken clouds: 51-84%") {
        weatherText.innerHTML = "brutna moln: 51-84%";
    }
    else if (weatherENG == "overcast clouds: 85-100% ") {
        weatherText.innerHTML = "mulna moln: 85-100% ";
    } */