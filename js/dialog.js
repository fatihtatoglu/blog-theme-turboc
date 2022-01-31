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

    $btnOpenDialog = document.getElementById("btnOpenDialog");

    $pnlDialog = document.getElementById("pnlDialog");
    $btnOk = document.getElementById("btnOK");

    $btnOpenDialog.addEventListener("click", function () {
        $pnlDialog.style.display = "block";
    });
    $btnOk.addEventListener("click", function () {
        $pnlDialog.style.display = "none";
    });

    // window.onclick = function (event) {
    //     if (event.target == $pnlDialog) {
    //         $pnlDialog.style.display = "none";
    //     }
    // }

    $btnOpenFormDialog = document.getElementById("btnOpenFormDialog");

    $pnlFormDialog = document.getElementById("pnlFormDialog");
    $btnSubmit = document.getElementById("btnSubmit");
    $btnCancel = document.getElementById("btnCancel");
    $btnHelp = document.getElementById("btnHelp");

    $btnOpenFormDialog.addEventListener("click", function () {
        $pnlFormDialog.style.display = "block";
    });

    $btnCancel.addEventListener("click", function () {
        $pnlFormDialog.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target == $pnlFormDialog) {
            $pnlFormDialog.style.display = "none";
        }
    });

};