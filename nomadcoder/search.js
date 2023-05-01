const searchBox = document.querySelector('.search-box');
const input = searchBox.querySelector('.searchInput');
const button = searchBox.querySelector('.searchBtn');
const selectValue = searchBox.querySelector('.selectSearch');

searchBox.addEventListener("submit", function (event) {
    event.preventDefault();

    const query = input.value;
    const engine = selectValue.value;
    let url;

    if (query.trim() === "") {
        alert("검색어를 입력하세요.");
        return;
    }

    if (engine === "naver") {
        url = `https://search.naver.com/search.naver?query=${encodeURIComponent(query)}`;
    } else if (engine === "google") {
        url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }

    window.location.href = url;
})
