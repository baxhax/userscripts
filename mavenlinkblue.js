// ==UserScript==
// @name        Mavenlink Blue
// @namespace   RPIC
// @match       https://*.mavenlink.com/*
// @grant       none
// @version     1.0
// @author      Frank Baxendale
// @description Changes default theme from kantana to mavenlink. No clue how long this will work or if it works for all pages.
// @run-at      document-end

// ==/UserScript==

document.getElementsByTagName("body")[0].dataset['theme'] = "mavenlink"