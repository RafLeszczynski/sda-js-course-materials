function Connector(checker) {

	this.submitId = 'submit';
	this.inputId = 'pangramInput';
	this.resultId = 'result';
	this.missingLettersId = 'missingLetters';

	this.getSubmitField =function() {
		return document.getElementById(this.submitId);
	}

	this.getInputData = function() {
		return document.getElementById(this.inputId).value;
	}

	this.getResultField =function() {
		return document.getElementById(this.resultId);
	}

	// submit listener 
	this.addSubmitListener = function() {
		document.addEventListener('DOMContentLoaded', function() {

			var btnSubmit = connector.getSubmitField();
			
			btnSubmit.addEventListener('click', function(event) {

				// get input 
				// var strInput = document.getElementById(connector.inputId).value;
				var strInput = connector.getInputData();

				//set input
				checker.setSentence(strInput);			

				// get result 
				var strResult = connector.getResultField();

				// display result

				strResult.innerText = checker.checkSentence();

				event.preventDefault();
				event.stopPropagation();	
			})

		})


	}


}