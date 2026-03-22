const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherCaption = document.querySelector("#weather-description");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=41.408825&lon=-112.03624&units=imperial&appid=c5f99e38fda61233aaeef4dafc178dc7"
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
    weatherCaption.innerHTML = `Current weather: <strong>${data.weather[0].description.toUpperCase()}</strong>`;
    
}

apiFetch();
