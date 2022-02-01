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

    $html = document.getElementsByTagName("html")[0];

    $lnkSmallTheme = document.getElementById("lnkSmallTheme");
    $lnkMediumTheme = document.getElementById("lnkMediumTheme");
    $lnkLargeTheme = document.getElementById("lnkLargeTheme");
    $lnkThemeLight = document.getElementById("lnkThemeLight");
    $lnkThemeDark = document.getElementById("lnkThemeDark");

    // default
    $html.setAttribute("data-theme", "light");
    $html.setAttribute("data-width", "");

    $lnkSmallTheme.addEventListener("click", function () {
        $html.setAttribute("data-width", "small");
    });

    $lnkMediumTheme.addEventListener("click", function () {
        $html.setAttribute("data-width", "");
    });

    $lnkLargeTheme.addEventListener("click", function () {
        $html.setAttribute("data-width", "large");
    });

    $lnkThemeLight.addEventListener("click", function () {
        $html.setAttribute("data-theme", "light");
    });

    $lnkThemeDark.addEventListener("click", function () {
        $html.setAttribute("data-theme", "dark");
    });
};