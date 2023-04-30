const searchBox = document.querySelector('.search-box');
const input = searchBox.querySelector('input');
const button = searchBox.querySelector('button');

button.addEventListener('click', search);

input.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        search();
    }
});

function search() {
    if (input.value) {
        window.location.href = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=' + input.value;
    } else {
        alert('검색어를 입력해주세요.');
    }
}