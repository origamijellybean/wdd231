const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherCaption = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.77112327990912&lon=6.633656966415248&units=imperial&appid=c5f99e38fda61233aaeef4dafc178dc7"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg; F`;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute("alt", `${data.weather[0].description} icon`);
    weatherIcon.setAttribute("width", `100`);
    weatherIcon.setAttribute("height", `100`);
    weatherCaption.innerHTML = `Current weather includes ${data.weather[0].description}`;
    
}

apiFetch();
