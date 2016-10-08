document.getElementById("pangramChecker").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var validation = isValid();
    var sharedElements = getSharedElements();

     
    var sharedElementsNode = document.createElement("span");
    var validationNode = document.createElement("span");

    var sharedElementsTextNode = document.createTextNode(sharedElements);
    var validationTextNode = document.createTextNode(validation);
    
    sharedElementsNode.appendChild(sharedElementsTextNode);
    validationNode.appendChild(validationTextNode);

    document.getElementById("result").appendChild(validationNode);     
    document.getElementById("missingLetters").appendChild(sharedElementsNode);     

});
