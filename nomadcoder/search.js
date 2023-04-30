const searchBox = document.querySelector('.search-box');
const input = searchBox.querySelector('input');
const button = searchBox.querySelector('button');

function search() {
    if (input.value) {
        window.location.href = 'https://www.naver.com/search?q=' + input.value;
    } else {
        alert('검색어를 입력해주세요.');
    }
}

button.addEventListener('click', search);

input.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        search();
    }
});
