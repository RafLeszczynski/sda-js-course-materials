"use strict";

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'z'];
var pangramInput = document.getElementById('pangramInput').value;
var splittedInput = pangramInput.split("");
var elementsNotShared = [];

function getSharedElements() {    
    for (var i=0; i<alphabet.length; i++) {
        if (splittedInput.indexOf(alphabet[i]) === -1) {
            elementsNotShared.push(alphabet[i]);
        }   
    }
    return elementsNotShared;
}

function isValid() {
    if (elementsNotShared.length > 0) {
        return false;
    }   else    {
        return true;
    }
}