const API_KEY = "edbbf493f7d6158f21853dae86f57693";
function weatherOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log("you here",lat,lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //console.log(url);
    fetch(url).then((response) => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    });
}
function weatherError() {
    alert("오늘 날씨를 찾을 수 없어요ㅠ.");
}

navigator.geolocation.getCurrentPosition(weatherOk, weatherError);