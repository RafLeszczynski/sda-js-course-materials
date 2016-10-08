"use strict";

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'z'];
var pangramInput =  document.getElementById('pangramInput').value;
var splittedInput = pangramInput.split("");
var elementsNotShared = [];

function getSharedElements() {    
    for (var i=0; i<alphabet.length; i++) {
        for (var j=0; j<splittedInput.length; j++) {
            if (splittedInput[i] !== alphabet[j]) {
                elementsNotShared.push(alphabet[i]);
            }   
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

