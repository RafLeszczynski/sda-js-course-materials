var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'];

function getInput() {
    var input = document.getElementById('pangramInput').value;
    input = input.toString();
    return input.toString();
}

function compare(input) {
    getInput();
    var tmp = [];
    for (var j = 0; j < alphabet.length; j++) {
        if (input.indexOf(alphabet[j]) === -1) {
            tmp.push(alphabet[j]);
        }
    }
    return tmp;
}

function isPangram() {
    var tmp = compare(getInput());
    if (tmp.length === 0) {
        document.getElementById('result').innerHTML = "is pangram";
    } else {
        document.getElementById('result').innerHTML = "is not pangram";
    }
    document.getElementById('missingLetters').innerHTML = tmp;
}

document.getElementById('pangramChecker').addEventListener('submit', function (event) {
    event.preventDefault();
    isPangram();
});