// ==UserScript==
// @name         Youtube download redirector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       zeeh1975
// @match        https://*.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant             GM_addStyle
// ==/UserScript==

(function() {
    'use strict';



  GM_addStyle(`
div.dlBtn {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99999999;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  outline: 0;
  background: #5383FB;
  color: white;
  border: 1px solid 1px solid #5383FB;
  font-family: Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif !important;
  font-size: 12px;
}
div.dlBtn:hover {
  background-color: #86A4FC;
}div.dlBtn {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99999;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  outline: 0;
  background: var(--primary-button-background);
  color: var(--primary-button-text);
  border: 1px solid 1px solid var(--accent);
  font-family: var(--font-family-segoe) !important;
}
div.dlBtn:hover {
  background-color: var(--primary-button-pressed);
}
div.dlBtn.shorts {
  right: 110px;
  top: 5px;
}div.dlBtn {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99999999;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  outline: 0;
  background: #5383FB;
  color: white;
  border: 1px solid 1px solid #5383FB;
  font-family: Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif !important;
  font-size: 12px;
}
div.dlBtn:hover {
  background-color: #86A4FC;
}  `);

    function addVideoButton(on) {
      let btn = document.createElement("div");
      btn.innerHTML = "Download";
      btn.classList.add("dlBtn");
      btn.onclick = () => this.getLinks(btn);
      on.prepend(btn);
      alert(2);
    }
    let dest = document.querySelector("#ytd-player");
    //addVideoButton(dest);

var button = document.createElement("Button");
button.innerHTML = "D";
button.style = "position: fixed;z-index: 9999;top: .2rem;right: -0.2rem;"
document.body.appendChild(button);
button.onclick = () => {
    let url = window.location.href;
    if (url.indexOf(".youtube.")>-1) {
        url = url.replace(".youtube.",".ssyoutube.");
        //alert(url);
        window.location.href = url;
    }

};


})();