document.addEventListener('DOMContentLoaded', () => {

    loadSiteSettings();

    renderMenu();

    bindThemeButtons();

    openDialog();
});

function renderMenu() {
    var $navigation = document.getElementById("navigation");

    var menuJson = [
        {
            "title": "-",
            "children": [
                {
                    "element-id": "lnkThemeLight",
                    "title": "Light Theme"
                },
                {
                    "element-id": "lnkThemeDark",
                    "title": "Dark Theme"
                },
                {
                    "role": "separator"
                },
                {
                    "element-id": "lnkSmallTheme",
                    "title": "Small Page Width"
                },
                {
                    "element-id": "lnkMediumTheme",
                    "title": "Medium Page Width"
                },
                {
                    "element-id": "lnkLargeTheme",
                    "title": "Large Page Width"
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
                    "title": "Checkbox"
                },
                {
                    "role": "separator"
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

    var menuTemplate = `<ul>
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

    var data = {
        menuItems: menuJson,
        "separator": function () {
            return this.role === "separator";
        },
        "hasChildren": function () {
            return this.children && this.children.length > 0;
        },
        "url": function () {
            if (this.url) {
                return this.url;
            }

            return "javascript:;";
        }
    };

    var output = Mustache.render(menuTemplate, data);
    $navigation.innerHTML = output;

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
}

function bindThemeButtons() {
    var $html = document.getElementsByTagName("html")[0];

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
}

function loadSiteSettings() {
    // default
    var $html = document.getElementsByTagName("html")[0];
    var themeWidth = window.localStorage.getItem("theme-width");
    var themeColor = window.localStorage.getItem("theme-color");

    if (themeWidth) {
        $html.setAttribute("data-width", themeWidth);
    }
    else {
        $html.setAttribute("data-width", "");
        window.localStorage.setItem("theme-width", "");
    }

    if (themeColor) {
        $html.setAttribute("data-theme", themeColor);
    }
    else {
        $html.setAttribute("data-theme", "light");
        window.localStorage.setItem("theme-color", "light");
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
    var $btnSubmit = document.getElementById("btnSubmit");
    var $btnCancel = document.getElementById("btnCancel");
    var $btnHelp = document.getElementById("btnHelp");

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