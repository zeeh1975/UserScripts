// ==UserScript==
// @name         mistarjetas prismamediosdepago chat remove
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mistarjetas.prismamediosdepago.com/*
// @icon         https://mistarjetas.prismamediosdepago.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';



    const interval = setInterval(function() {
        let chat = document.getElementById("AgentAppContainer")
        if (chat) {
            chat.remove()
            clearInterval(interval);
        }
    }, 2000);


})();