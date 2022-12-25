const themeName = "turboc";
const themeColors = ["aqua", "black", "blue", "white"];
const defaultThemeColor = "aqua";

document.addEventListener('DOMContentLoaded', () => {

    loadSiteSettings();

    renderMenu();
    renderThemeDialog();

    bindMenuButtons();

    openDialog();

    dialogCloseButton();
    articleHeaderButton();
});

function renderMenu() {
    let $navigation = document.getElementById("navigation");

    let menuJson = [
        {
            "title": "-",
            "children": [
                {
                    "element-id": "btnTheme",
                    "title": "Theme Options"
                }
            ]
        },
        {
            "title": "Home",
            "url": "index.html"
        },
        {
            "title": "Elements",
            "children": [
                {
                    "url": "color_matrix.html",
                    "title": "Colors"
                },
                {
                    "url": "typography.html",
                    "title": "Typography"
                },
                {
                    "role": "separator"
                },
                {
                    "url": "button.html",
                    "title": "Button"
                },
                {
                    "url": "textbox.html",
                    "title": "Textbox"
                },
                {
                    "url": "selectbox.html",
                    "title": "Selectbox"
                },
                {
                    "url": "checkbox.html",
                    "title": "Checkbox & Radio Button"
                },
                {
                    "role": "separator"
                },
                {
                    "url": "table.html",
                    "title": "Table"
                },
                {
                    "url": "form.html",
                    "title": "Form"
                },
                {
                    "url": "dialog.html",
                    "title": "Dialog"
                },
                {
                    "url": "menu.html",
                    "title": "Menu"
                }
            ]
        },
        {
            "title": "Demo Pages",
            "children": [
                {
                    "title": "Layout",
                    "url": "layout.html"
                },
                {
                    "title": "Blog Post",
                    "disabled": true
                },
                {
                    "title": "Blog Home Page",
                    "disabled": true
                }
            ]
        },
        {
            "title": "Disabled",
            "disabled": true
        },
        {
            "title": "About",
            "url": "about.html"
        }
    ];

    let menuTemplate = `
    <span class="menu-button">▼</span>
    <ul>
    {{#menuItems}}
        {{#disabled}}
        <li class="disabled">
            <a href="{{url}}">{{title}}</a>
        </li>
        {{/disabled}}
        {{^disabled}}
        <li>
            <a href="{{url}}">{{title}}</a>
            {{#hasChildren}}
            <div class="sub-menu">
                <ul>
                    {{#children}}
                        {{#separator}}
                        <li role="separator"></li>
                        {{/separator}}
                        {{^separator}}
                            {{#disabled}}
                            <li class="disabled"><a {{#element-id}}id="{{.}}" {{/element-id}}href="{{url}}">{{title}}</a></li>
                            {{/disabled}}

                            {{^disabled}}
                            <li><a {{#element-id}}id="{{.}}" {{/element-id}}href="{{url}}">{{title}}</a></li>
                            {{/disabled}}
                        {{/separator}}
                    {{/children}}
            </ul>
            </div>
            {{/hasChildren}}
        </li>
        {{/disabled}}
    {{/menuItems}}
    </ul>`;

    let data = {
        menuItems: menuJson,
        "separator": function () {
            return this.role === "separator";
        },
        "hasChildren": function () {
            return this.children && this.children.length > 0;
        },
        "url": function () {
            if (this.url) {
                return this.url.toString();
            }

            return "javascript:;";
        }
    };

    let output = Mustache.render(menuTemplate, data);
    $navigation.innerHTML = output;

    let menu = document.querySelector("nav>ul");
    let menuitems = menu.querySelectorAll("nav>ul>li");

    let toggler = document.querySelector("nav>span.menu-button");

    function hideAllSubMenus() {
        let submenus = menu.querySelectorAll("nav>ul>li div.sub-menu");
        submenus.forEach(sm => {
            sm.style.display = "none";
        });
    }

    menuitems.forEach((item) => {

        let subMenu = item.querySelector("div.sub-menu");
        if (!subMenu) {
            return;
        }

        // set initial state
        subMenu.style.display = "none";

        item.addEventListener("click", () => {
            if (subMenu.style.display === "none") {

                hideAllSubMenus();

                subMenu.style.display = "block";
            } else {
                subMenu.style.display = "none";
            }
        });
    });

    toggler.addEventListener("click", () => {
        if (menu.style.display === "table") {
            hideAllSubMenus();

            menu.style.display = "none";
        }
        else {
            menu.style.display = "table";
        }
    });
}

function bindMenuButtons() {
    var $btnTheme = document.getElementById("btnTheme");
    var $pnlThemeDialog = document.getElementById("pnlThemeDialog");

    $btnTheme.addEventListener("click", function () {
        if ($pnlThemeDialog) {
            $pnlThemeDialog.style.display = "block";
        }
    });

    window.addEventListener("click", function (e) {
        if (e.target == $pnlThemeDialog) {
            $pnlThemeDialog.style.display = "none";
        }
    });
}

function loadSiteSettings() {
    var $html = document.getElementsByTagName("html")[0];
    var themeColor = window.localStorage.getItem("theme-color");

    $html.className = "";

    if (themeColor) {
        $html.classList.add(themeName);
        $html.classList.add(themeColor);
    }
    else {
        $html.classList.add(themeName);
        $html.classList.add(defaultThemeColor);

        window.localStorage.setItem("theme-name", themeName);
        window.localStorage.setItem("theme-color", defaultThemeColor);
    }
}

function openDialog() {
    var $btnOpenDialog = document.getElementById("btnOpenDialog");
    if (!$btnOpenDialog) {
        return;
    }

    var $pnlDialog = document.getElementById("pnlDialog");
    var $btnOk = document.getElementById("btnOK");

    $btnOpenDialog.addEventListener("click", () => {
        $pnlDialog.style.display = "block";
    });
    $btnOk.addEventListener("click", () => {
        $pnlDialog.style.display = "none";
    });

    var $btnOpenFormDialog = document.getElementById("btnOpenFormDialog");
    if (!$btnOpenFormDialog) {
        return;
    }

    var $pnlFormDialog = document.getElementById("pnlFormDialog");
    var $btnCancel = document.getElementById("btnCancel");

    $btnOpenFormDialog.addEventListener("click", () => {
        $pnlFormDialog.style.display = "block";
    });

    $btnCancel.addEventListener("click", () => {
        $pnlFormDialog.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target == $pnlFormDialog) {
            $pnlFormDialog.style.display = "none";
        }
    });
}

function renderThemeDialog() {

    let $body = document.getElementsByTagName("body")[0];
    var template = `<div id="pnlThemeDialog" class="dialog">
    <div class="dialog-box">
        <div class="dialog-content">
            <header><button>■</button><span>Theme Options</span></header>
            <main>
            <table style="margin: auto;">
                <thead><th style="width: 150px;">Colors</th></thead>
                <tbody>
                    <tr>
                        <td style="text-align: left; padding-left: 25%;">
                        {{#color}}
                            <input id="rbColor{{.}}" name="color" type="radio" value="{{.}}" />
                            <label for="rbColor{{.}}">{{.}}</label>
                            <br />
                        {{/color}}
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            </main>
            <footer>
                <button id="btnThemeDialogOK" class="default" accesskey="o"><u>O</u>K</button>
            </footer></div></div></div>`;

    var data = {
        color: themeColors
    };

    var output = Mustache.render(template, data);
    var div = document.createElement("div");
    div.innerHTML = output;

    var dialog = div.childNodes[0];
    $body.append(dialog);

    var $btnThemeDialogOK = document.getElementById("btnThemeDialogOK");
    $btnThemeDialogOK.addEventListener("click", function () {
        var selectedElements = dialog.querySelectorAll("input[type=radio]:checked");
        selectedElements.forEach(function (item) {
            if (item.name === "color") {
                window.localStorage.setItem("theme-color", item.value);
            }
        });

        loadSiteSettings();

        dialog.style.display = "none";
    });
}

function dialogCloseButton() {
    let dialogs = document.querySelectorAll("div.dialog");
    dialogs.forEach((item) => {
        let closeButton = item.querySelector("div.dialog-box div.dialog-content header button");
        closeButton.addEventListener("click", () => {
            item.style.display = "none";
        });
    });
}

function articleHeaderButton() {
    let articleButton = document.querySelector("article > header > button");
    articleButton.addEventListener("click", () => {
        var $pnlThemeDialog = document.getElementById("pnlThemeDialog");
        if ($pnlThemeDialog) {
            $pnlThemeDialog.style.display = "block";
        }
    });
}