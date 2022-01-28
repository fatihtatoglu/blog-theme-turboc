window.onload = function () {

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