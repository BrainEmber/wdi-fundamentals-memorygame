 
 var cards = [
 	{
 		rank: "queen",
 		suit: "hearts",
 		cardImage: "images/queen-of-hearts.png"
 	},
 	{
 		rank: "queen",
 		suit: "diamonds",
 		cardImage: "images/queen-of-diamonds.png"
 	},
 	{
 		rank: "king",
 		suit: "hearts",
 		cardImage: "images/king-of-hearts.png"
 	},
 	{
 		rank: "king",
 		suit: "diamonds",
 		cardImage: "images/king-of-diamonds.png"
 	}

 ];

 

 var cardsInPlay = [];

 var checkForMatch = function(poker2) {
 //	src.setAttribute(cards[poker2].cardImage);
 	if (cardsInPlay.length === 2) {

 	 	 if (cardsInPlay[0] === cardsInPlay[1] || cardsInPlay[2] === cardsInPlay[3]) {
    	  alert("You found a match!");
  	} else {
    	  alert("Sorry, try again.");
 	 }
 	}

 }
 var _this = this

 var flipCard = function(cardElement) {
 	

 	var cardId =  cardElement.getAttribute('datasId');
 	//console.log("User flipped " + cards[cardId].rank);
 	//console.log(cards[cardId].cardImage);
 	//console.log(cards[cardId].suit);

 	cardsInPlay.push(cards[0].rank);

 	checkForMatch();

 }
 

 var createBoard = function() {


 	for (var i = 0; i < cards.length; i++ ) {
 		var cardElement = document.createElement('img');
 		cardElement.setAttribute('src', 'images/back.png');
 		cardElement.setAttribute('datasId', i);
 	
 		cardElement.addEventListener("click", flipCard(cardElement))
 			document.getElementById("game-board").appendChild(cardElement);
 			cardElement.setAttribute('src', cards[i].cardImage);


 	//	gameBoard()
 	}


 }
 

createBoard();

 