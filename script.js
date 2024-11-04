const button = document.getElementById("buttonForMap");


function WeatherFunction() {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=15.61287516898284&lon=58.411616852847736&appid=df4c0154d893ba9c3ae1e611a27a169b&lang=sv")
        .then((response) => response.json())  // Parse the JSON directly
        .then((weatherData) => {
            const weatherText = document.getElementById("weatherText"); // Assuming you have an element with this ID
            weatherText.innerHTML = weatherData.weather[0].description})
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

function fetchISSPosition() {
    console.log("start");
    fetch("http://api.open-notify.org/iss-now.json")
        .then(response => response.json())
        .then(data => {
            const { latitude, longitude } = data.iss_position;
            document.getElementById("iss-position").innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
        })
        .catch(error => {
            document.getElementById("iss-position").innerText = "Failed to fetch ISS Position.";
            console.error("Error fetching data:", error);
        })
    console.log("slut");
}


fetchISSPosition();
