
//Basic Card Constructor

function BasicCard(front, back){
	this.front = front;
	this.back = back;
}

// New instance of Basic Card which is firstPresident
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front);
console.log(firstPresident.back);


//Export the constructor
module.exports = BasicCard;