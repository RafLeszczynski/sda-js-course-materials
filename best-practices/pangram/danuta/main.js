
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.getElementById('pangramChecker').addEventListener('submit',function(event){
    event.preventDefault();
    var val = document.getElementById('pangramInput').value.toLowerCase();
    var charArr = val.split('');
    var missingLetters = [];
    
    
    for (var i=0; i<alphabet.length; i++){
        if (charArr.indexOf(alphabet[i]) === -1) {
            missingLetters.push(alphabet[i]);
        }
    }
    
    document.getElementById('result').textContent = missingLetters.length === 0;
    document.getElementById('missingLetters').textContent = missingLetters.join();

    
})
