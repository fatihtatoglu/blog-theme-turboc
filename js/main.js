window.onload = function () {
    var menuitems = document.querySelectorAll("nav>ul>li");
    menuitems.forEach(function (item) {

        var subMenu = item.querySelector("div.sub-menu");
        if (subMenu) {
            item.addEventListener("mouseover", function () {
                subMenu.style.display = "block";
            });

            item.addEventListener("mouseleave", function () {
                subMenu.style.display = "none";
            });

            subMenu.addEventListener("click", function () {
                subMenu.style.display = "none";
            });
        }

    });

    var $html = document.getElementsByTagName("html")[0];

    var $lnkSmallTheme = document.getElementById("lnkSmallTheme");
    var $lnkMediumTheme = document.getElementById("lnkMediumTheme");
    var $lnkLargeTheme = document.getElementById("lnkLargeTheme");
    var $lnkThemeLight = document.getElementById("lnkThemeLight");
    var $lnkThemeDark = document.getElementById("lnkThemeDark");

    // default
    var themeWidth = window.localStorage.getItem("theme-width");
    var themeColor = window.localStorage.getItem("theme-color");

    if (themeWidth) {
        $html.setAttribute("data-width", themeWidth);
    }
    else {
        $html.setAttribute("data-width", "");
    }

    if (themeColor) {
        $html.setAttribute("data-theme", themeColor);
    }
    else {
        $html.setAttribute("data-theme", "light");
    }

    $lnkSmallTheme.addEventListener("click", function () {
        $html.setAttribute("data-width", "small");

        window.localStorage.setItem("theme-width", "small");
    });

    $lnkMediumTheme.addEventListener("click", function () {
        $html.setAttribute("data-width", "");

        window.localStorage.setItem("theme-width", "");
    });

    $lnkLargeTheme.addEventListener("click", function () {
        $html.setAttribute("data-width", "large");

        window.localStorage.setItem("theme-width", "large");
    });

    $lnkThemeLight.addEventListener("click", function () {
        $html.setAttribute("data-theme", "light");

        window.localStorage.setItem("theme-color", "light");
    });

    $lnkThemeDark.addEventListener("click", function () {
        $html.setAttribute("data-theme", "dark");

        window.localStorage.setItem("theme-color", "dark");
    });
};