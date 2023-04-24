// ==UserScript==
// @name         BlueFM autoplay
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       zeeh1975
// @match        https://bluefm.com.ar/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bluefm.com.ar
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(()=>{
        let playbtn=document.getElementById("buttonplay");
        playbtn.click();
    }, 1000);
    
})();