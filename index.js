var randomNumber1 = Math.floor(Math.random()*7) +1;

var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImageSource1;

var randomDiceImageSource2;

var piece1;
var piece1;
var piece1;

switch(randomNumber1){

  case 1:  randomDiceImageSource1 = "img/pawn.png";
             piece1= "Pawn";
  break;
  case 2:  randomDiceImageSource1 = "img/knight.png";
             piece1= "Knight";
  break;
  case 3:  randomDiceImageSource1 = "img/queen.png";
             piece1= "Queen";
  break;
  case 4:  randomDiceImageSource1 = "img/king.png";
             piece1= "King";
  break;
  case 5:  randomDiceImageSource1 = "img/rook.png";
             piece1= "Rook";
  break;
  case 6:  randomDiceImageSource1 = "img/bishop.png";
             piece1= "Bishop";
  break;
}
var randomNumber2= Math.floor(Math.random()*6)+1;
switch(randomNumber2){

  case 1:  randomDiceImageSource2 = "img/pawn.png";
             piece2= "Pawn";
  break;
  case 2:  randomDiceImageSource2 = "img/knight.png";
             piece2= "Knight";
  break;
  case 3:  randomDiceImageSource2 = "img/queen.png";
             piece2= "Queen";
  break;
  case 4:  randomDiceImageSource2 = "img/king.png";
             piece2= "King";
  break;
  case 5:  randomDiceImageSource2 = "img/rook.png";
             piece2= "Rook";
  break;
  case 6:  randomDiceImageSource2 = "img/bishop.png";
             piece2= "Bishop";
  break;
  default: "invalid";
}
var randomNumber3 = Math.floor(Math.random()*6)+1;

var randomDiceImageSource3;
switch(randomNumber3){


  case 1:  randomDiceImageSource3 = "img/pawn.png";
           piece3= "Pawn";
  break;
  case 2:  randomDiceImageSource3 = "img/knight.png";
             piece3= "Knight";
  break;
  case 3:  randomDiceImageSource3 = "img/queen.png";
             piece3= "Queen";
  break;
  case 4:  randomDiceImageSource3 = "img/king.png";
             piece3="King";
  break;
  case 5:  randomDiceImageSource3 = "img/rook.png";
             piece3= "Rook";
  break;
  case 6:  randomDiceImageSource3 = "img/bishop.png";
             piece3= "Bishop";
  break;
}

document.querySelectorAll("p")[0].innerHTML= piece1 ;
document.querySelectorAll("p")[1].innerHTML= piece2 ;
document.querySelectorAll("p")[2].innerHTML= piece3 ;

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src", randomDiceImageSource1);


var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src", randomDiceImageSource2);

var img3=document.querySelectorAll("img")[2];

img3.setAttribute("src", randomDiceImageSource3);
