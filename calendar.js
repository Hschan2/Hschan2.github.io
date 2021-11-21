GitHubCalendar(".calendar", "Hschan2", { responsive: true, tooltips: false, global_stats: false, summary_text: false}).then(function() {
    // Github Calender Graph Style
    document.getElementsByClassName('calendar')[0].style.minHeight = "100px";
    document.getElementsByClassName('calendar')[0].style.maxWidth = "450px";
    document.getElementsByClassName('calendar')[0].style.border = "none";
    // Graph 밑에 Less More 숨기기
    // document.getElementsByClassName('contrib-legend')[0].style.display = "none";
    document.querySelector('.js-calendar-graph .color-text-secondary').style.display = "none"
});