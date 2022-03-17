const themeColors=["green","black"],themeSizes=["normal","narrow","wide"],defaultThemeColor="green",defaultThemeSize="normal";function renderMenu(){var e=document.getElementById("navigation"),t={menuItems:[{title:"-",children:[{"element-id":"btnTheme",title:"Theme Options"}]},{title:"Home",url:"index.html"},{title:"Elements",children:[{url:"color_matrix.html",title:"Colors"},{url:"typography.html",title:"Typography"},{role:"separator"},{url:"button.html",title:"Button"},{url:"textbox.html",title:"Textbox"},{url:"selectbox.html",title:"Selectbox"},{url:"checkbox.html",title:"Checkbox"},{role:"separator"},{url:"form.html",title:"Form"},{url:"dialog.html",title:"Dialog"},{url:"menu.html",title:"Menu"}]},{title:"Demo Pages",children:[{title:"Layout",url:"layout.html"},{title:"Blog Post",disabled:!0},{title:"Blog Home Page",disabled:!0}]},{title:"Disabled",disabled:!0},{title:"About",url:"about.html"}],separator:function(){return"separator"===this.role},hasChildren:function(){return this.children&&this.children.length>0},url:function(){return this.url?this.url:"javascript:;"}},l=Mustache.render('<ul>\n    {{#menuItems}}\n        {{#disabled}}\n        <li class="disabled">\n            <a href="{{url}}">{{title}}</a>\n        </li>\n        {{/disabled}}\n        {{^disabled}}\n        <li>\n            <a href="{{url}}">{{title}}</a>\n            {{#hasChildren}}\n            <div class="sub-menu">\n                <ul>\n                    {{#children}}\n                        {{#separator}}\n                        <li role="separator"></li>\n                        {{/separator}}\n                        {{^separator}}\n                            {{#disabled}}\n                            <li class="disabled"><a {{#element-id}}id="{{.}}" {{/element-id}}href="{{url}}">{{title}}</a></li>\n                            {{/disabled}}\n\n                            {{^disabled}}\n                            <li><a {{#element-id}}id="{{.}}" {{/element-id}}href="{{url}}">{{title}}</a></li>\n                            {{/disabled}}\n                        {{/separator}}\n                    {{/children}}\n            </ul>\n            </div>\n            {{/hasChildren}}\n        </li>\n        {{/disabled}}\n    {{/menuItems}}\n    </ul>',t);e.innerHTML=l,document.querySelectorAll("nav>ul>li").forEach(e=>{var t=e.querySelector("div.sub-menu");t&&(e.addEventListener("mouseover",()=>{t.style.display="block"}),e.addEventListener("mouseleave",()=>{t.style.display="none"}),t.addEventListener("click",()=>{t.style.display="none"}))})}function bindMenuButtons(){var e=document.getElementById("btnTheme"),t=document.getElementById("pnlThemeDialog");e.addEventListener("click",function(){t&&(t.style.display="block")}),window.addEventListener("click",function(e){e.target==t&&(t.style.display="none")})}function loadSiteSettings(){var e=document.getElementsByTagName("html")[0],t=window.localStorage.getItem("theme-color"),l=window.localStorage.getItem("theme-size");e.className="",t?(e.classList.add(t),e.classList.add(l)):(e.classList.add(defaultThemeColor),e.classList.add(defaultThemeSize),window.localStorage.setItem("theme-color",defaultThemeColor),window.localStorage.setItem("theme-size",defaultThemeSize))}function openDialog(){var e=document.getElementById("btnOpenDialog");if(e){var t=document.getElementById("pnlDialog"),l=document.getElementById("btnOK");e.addEventListener("click",()=>{t.style.display="block"}),l.addEventListener("click",()=>{t.style.display="none"});var n=document.getElementById("btnOpenFormDialog");if(n){var i=document.getElementById("pnlFormDialog"),o=(document.getElementById("btnSubmit"),document.getElementById("btnCancel"));document.getElementById("btnHelp");n.addEventListener("click",()=>{i.style.display="block"}),o.addEventListener("click",()=>{i.style.display="none"}),window.addEventListener("click",function(e){e.target==i&&(i.style.display="none")})}}}function renderThemeDialog(){$body=document.getElementsByTagName("body")[0];var e={color:themeColors,size:themeSizes},t=Mustache.render('<div id="pnlThemeDialog" class="dialog">\n    <div class="dialog-box">\n        <div class="dialog-content">\n            <header><span>Theme Options</span></header>\n            <main>\n            <table style="margin: auto;">\n                <thead><th style="width: 150px;">Colors</th><th style="width: 150px;">Sizes</th></thead>\n                <tbody>\n                    <tr>\n                        <td style="vertical-align: top;">\n                        {{#color}}\n                            <input id="rbColor{{.}}" name="color" type="radio" value="{{.}}" />\n                            <label for="rbColor{{.}}">{{.}}</label>\n                            <br />\n                        {{/color}}\n                        </td>\n                        <td style="vertical-align: top;">\n                        {{#size}}\n                            <input id="rbColor{{.}}" name="size" type="radio"  value="{{.}}" />\n                            <label for="rbColor{{.}}">{{.}}</label>\n                            <br />\n                        {{/size}}\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <br />\n            </main>\n            <footer>\n                <button id="btnThemeDialogOK" class="default" accesskey="o"><u>O</u>K</button>\n            </footer></div></div></div>',e),l=document.createElement("div");l.innerHTML=t;var n=l.childNodes[0];$body.append(n),document.getElementById("btnThemeDialogOK").addEventListener("click",function(){n.querySelectorAll("input[type=radio]:checked").forEach(function(e){"color"===e.name?window.localStorage.setItem("theme-color",e.value):"size"===e.name&&window.localStorage.setItem("theme-size",e.value)}),loadSiteSettings(),n.style.display="none"})}document.addEventListener("DOMContentLoaded",()=>{loadSiteSettings(),renderMenu(),renderThemeDialog(),bindMenuButtons(),openDialog()});
//# sourceMappingURL=main.js.map
