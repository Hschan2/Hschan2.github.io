// 시간
const clock = document.querySelector('.clock');

function getTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();.

    return `${year}-${month < 10 ? `0${month}` : month}-${
      day < 10 ? `0${day}` : day
    } ${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${
      second < 10 ? `0${second}` : second
    }`;
}

function showClock() {
    const clock = document.querySelector(".clock");
    clock.innerHTML = getTime();
}

setInterval(showClock, 1000);

// 날씨 및 위치
let weather = document.querySelector('.weather');

navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    const apiKey = 'a03004bf971234fd4cb532f6df20b7af';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    weather.innerHTML = "날씨 정보를 가져오고 있어요.";

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const weather = data.weather[0].main;
            const location = data.name;
            const temperature = data.main.temp;
  
            weather.innerHTML = `${location}, ${weather} ${temperature}°C`;
        })
        .catch((error) => {
            console.log(error);
            weather.innerHTML = `날씨 정보를 가져오지 못했어요.`;
    });
});