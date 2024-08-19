// ==UserScript==
// @name         Dribble.com to Dribbble.com Redirect
// @namespace    http://tampermonkey.net/
// @version      2024-08-19
// @description  redirect dribble.com to original dribbble.com!
// @author       CypherpunkSamurai
// @match        https://dribble.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dribbble.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Initial Edit
    var center = document.querySelector("body > div:nth-child(1)");
    center.style.display = 'flex';
    center.style.alignItems = 'center';
    center.style.justifyContent = 'center';
    center.replaceChildren([])
    // create a header and append it
    var h1 = document.createElement("h1");
    h1.setAttribute("style", 'font-family: system-ui;');
    h1.textContent = "Redirecting to Dribbble.com...";
    var ico = document.createElement("img");
    ico.setAttribute("src", "https://img.icons8.com/color/48/dribbble.png");
    center.appendChild(ico);
    center.appendChild(h1);

    // Redirect...
    window.setTimeout(function(){
        // Move to a new location or you can do something else
        window.location.href = "https://dribbble.com";
    }, 2000);
})();
