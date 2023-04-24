// ==UserScript==
// @name         Futbolparatodos UI cleaner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://futbolparatodos.online/*
// @match        https://*.futbolparatodos.online/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=futbolparatodos.online
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let chat = document.querySelector(".columnsidebarderecha")
    if (chat) {
        chat.remove()
    }

    let menu = document.querySelector(".columnsidebar")
    if (menu) {
        menu.remove()
    }

  let video = document.querySelector(".columncontenido")
  if (video){
        video.style.width = "100%"
    }
})();