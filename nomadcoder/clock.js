const clockContainer = document.querySelector(".js-clock"), //js-clock 찾기
      clockTitle = clockContainer.querySelector("h1"); // js-clock 안 h1 찾기

function getTime() {
    const date = new Date(); // 현재 날짜 가져오기
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const months = date.getMonth() + 1;
    const days = date.getDate();
    const fullYear = date.getFullYear();
    clockTitle.innerText = `${fullYear}.${months < 10 ? `0${months}` : months}.${days < 10 ? `0${days}` : days}`
    + "\n" +
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
                                                // seconds가 10보다 작으면 0을 앞에 붙이고 아니면 그대로 출력
}

function init() { //초기화
    getTime(); //getTime함수 실행
    setInterval(getTime, 1000); // 매 초(1초)마다 새로고침
}
init(); // 함수 실행