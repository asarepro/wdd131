const currentYear = new Date();
const fullyear = currentYear.getFullYear();
const year = document.getElementById('year').innerHTML += ` ${fullyear} Asare Jeffrey | Ghana 😎`;
const temperatureF = 40,
Wind_speed = 10,
Wind_chill = document.querySelector('.Wind_chill');


function calculateWindChill (temp,Windspeed) {
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(Windspeed, 0.16) + 0.42275 * temp * Math.pow(Windspeed, 0.16);
}

function displaywindChill() {
    if (temperatureF <= 50 && Wind_speed > 3) {
        Wind_chill.textContent = `${calculateWindChill(temperatureF, Wind_speed).toFixed(1)} °F `;
    }

    else {
        Wind_chill.textContent = `N/A`;
    }
}

window.addEventListener('load', displaywindChill);






document.getElementById('lastModified').innerHTML = `Last Modification ${document.lastModified}`;