// var windowHeight = window.innerHeight;
// var scrollY = window.scrollY;

// var skillSectionDiv = document.getElementById("skillSectionTop");
// var skillSectionTopPos = skillSectionDiv.getBoundingClientRect().top;
// var absoluteSkillSectionPos = scrollY + skillSectionTopPos;

// console.log(absoluteSkillSectionPos);

var animation = () => {
    var skillItems, winHeight;
    var addStyles = ["htmlWidth", "cssWidth", "jsWidth", "javaWidth", "phpWidth"];

    var initModule = () => {
        skillItems = document.querySelectorAll(".skillLevel");
        winHeight = window.innerHeight;
        addEventHandlers();
    }

    var addEventHandlers = () => {
        window.addEventListener("scroll", checkPosition);
        window.addEventListener("load", checkPosition);
        window.addEventListener("resize", initModule);
    }

    var checkPosition = () => {
        for (var i = 0; i < skillItems.length; i++) {
            var posFromTop = skillItems[i].getBoundingClientRect().top;
            if (winHeight > posFromTop) {
                skillItems[i].classList.add(addStyles[i]);
            }
        }
    }

    return {
        init: initModule
    }
}

animation().init();