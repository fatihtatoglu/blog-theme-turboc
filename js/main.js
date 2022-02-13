document.addEventListener('DOMContentLoaded', () => {
    // default
    var $html = document.getElementsByTagName("html")[0];
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

    var menuitems = document.querySelectorAll("nav>ul>li");
    menuitems.forEach((item) => {

        var subMenu = item.querySelector("div.sub-menu");
        if (subMenu) {
            item.addEventListener("mouseover", () => {
                subMenu.style.display = "block";
            });

            item.addEventListener("mouseleave", () => {
                subMenu.style.display = "none";
            });

            subMenu.addEventListener("click", () => {
                subMenu.style.display = "none";
            });
        }

    });

    var $lnkSmallTheme = document.getElementById("lnkSmallTheme");
    var $lnkMediumTheme = document.getElementById("lnkMediumTheme");
    var $lnkLargeTheme = document.getElementById("lnkLargeTheme");
    var $lnkThemeLight = document.getElementById("lnkThemeLight");
    var $lnkThemeDark = document.getElementById("lnkThemeDark");

    $lnkSmallTheme.addEventListener("click", () => {
        $html.setAttribute("data-width", "small");

        window.localStorage.setItem("theme-width", "small");
    });

    $lnkMediumTheme.addEventListener("click", () => {
        $html.setAttribute("data-width", "");

        window.localStorage.setItem("theme-width", "");
    });

    $lnkLargeTheme.addEventListener("click", () => {
        $html.setAttribute("data-width", "large");

        window.localStorage.setItem("theme-width", "large");
    });

    $lnkThemeLight.addEventListener("click", () => {
        $html.setAttribute("data-theme", "light");

        window.localStorage.setItem("theme-color", "light");
    });

    $lnkThemeDark.addEventListener("click", () => {
        $html.setAttribute("data-theme", "dark");

        window.localStorage.setItem("theme-color", "dark");
    });
});

document.addEventListener("keydown", (e)=>{

    var name = e.key;
    var code = e.code;

    console.log("Key Down Name: " + name + " Code:" + code);

    e.preventDefault();

},false);