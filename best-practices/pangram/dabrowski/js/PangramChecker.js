function PangramChecker() {

	this.sentence = '';
	this.letterArray = [];
	this.regExpression = new RegExp(/[a-z]/);
	this.alphabetCount = 26;

	this.setSentence = function(sentence) {
		this.sentence =sentence;
	}

	this.isInExpression = function(letter) {
		return this.regExpression.test(letter);		
	}


	this.isPangram = function() {
		return Object.keys(this.letterArray).length === this.alphabetCount;
	}

	this.processAllLetters = function() {
		for (var i = 0; i < this.sentence.length; i++) {

			if (this.isInExpression(this.sentence[i])) {
				this.letterArray[this.sentence[i]] = true;
			}
		}
	}

	this.checkSentence = function() {

		this.sentence = this.sentence.toLowerCase();

		this.processAllLetters();

		// missing letters 
		console.log(this.letterArray);
		return this.isPangram();
	}


}