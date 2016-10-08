document.getElementById("pangramChecker").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var sharedElements = getSharedElements().join();    
    var validation = isValid();

    document.getElementById("result").textContent = validation;     
    document.getElementById("missingLetters").textContent = sharedElements;     
});