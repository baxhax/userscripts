// ==UserScript==
// @name        Yoga Content Row Count
// @namespace   RPIC
// @match       https://yogacontentrpic.com/view/*
// @grant       none
// @version     1.0
// @author      Frank Baxendale
// @description 8/7/2023, 3:07:27 PM
// ==/UserScript==
(function() {
    'use strict';

    function addRowCount() {
        var matRows = document.querySelectorAll("mat-row");

        console.log("Number of mat-row elements found:", matRows.length);

        matRows.forEach(function(matRow, index) {
            var matCells = matRow.querySelectorAll("mat-cell");

            var rowCount = index + 1;
            var lastMatCell = matCells[matCells.length - 1];
            lastMatCell.textContent = rowCount;
        });
    }

    function waitForDelay() {
        setTimeout(function() {
            addRowCount();
            observeDOMChanges();
        }, 7500);
    }

    function observeDOMChanges() {
        var targetNode = document.body;
        var config = { childList: true, subtree: true };

        var callback = function(mutationsList) {
            for (var mutation of mutationsList) {
                if (mutation.type === 'childList' && mutation.addedNodes) {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1 && node.matches("mat-row")) {
                            addRowCount();
                        }
                    });
                }
            }
        };

        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }

    waitForDelay();
    observeDOMChanges();

}
)
();
