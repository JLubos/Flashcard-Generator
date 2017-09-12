var BasicCard = require("./BasicCard");

//ClozeCard Constructor
function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;
}


//Adding methods to the prorotype
//Adding the "cloze" method to the prototype, extracing the "cloze" part
ClozeCard.prototype.cloze = function cloze(){
	console.log(this.cloze);

};


//Taking the full text and replacing the answer with the "..."
ClozeCard.prototype.partial = function partial(){
	console.log(this.text.replace("...", this.cloze));


}


//Taking the full text
ClozeCard.prototype.fullText = function fullText(){
	console.log(this.text);

}


//New Instance
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

// var firstPresidentClozePrototype = Object.getPrototypeOf(firstPresidentCloze);
// var basicCardProtype = BasicCard.prototype;


console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.partial);
console.log(firstPresidentCloze.fullText);

var brokenCloze = new ClozeCard("this doesn't work", "Oops");

//console.log(brokenCloze);

//Exporting the Constructor
module.exports = ClozeCard;