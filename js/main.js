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
        }
    });

    $body = document.getElementsByTagName("body")[0];
    $lnkSmallTheme = document.getElementById("lnkSmallTheme");
    $lnkMediumTheme = document.getElementById("lnkMediumTheme");
    $lnkLargeTheme = document.getElementById("lnkLargeTheme");

    $lnkSmallTheme.addEventListener("click", function () {
        $body.classList.remove("theme-large");
        $body.classList.remove("theme-small");

        $body.classList.add("theme-small");
    });

    $lnkMediumTheme.addEventListener("click", function () {
        $body.classList.remove("theme-large");
        $body.classList.remove("theme-small");
    });

    $lnkLargeTheme.addEventListener("click", function () {
        $body.classList.remove("theme-large");
        $body.classList.remove("theme-small");

        $body.classList.add("theme-large");
    });


    


};