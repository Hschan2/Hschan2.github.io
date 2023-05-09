GitHubCalendar(".calendar", "Hschan2", { responsive: true, tooltips: false, global_stats: false, summary_text: false}).then(function() {
    // delete the space underneath the module bar which is caused by minheight
    document.getElementsByClassName('calendar')[0].style.minHeight = "100px";
    document.getElementsByClassName('calendar')[0].style.maxWidth = "450px";
    document.getElementsByClassName('calendar')[0].style.border = "none";
    // hide more and less legen below the contribution graph
    document.getElementsByClassName('contrib-legend')[0].style.display = "none";
});