
var randomDice;
var randomDice2;

var images = document.querySelectorAll("img");

var title = document.querySelector("h1");

document.addEventListener("click", function () {
    document.querySelector(".hint").classList.add("invisible");
    randomDice = Math.floor(Math.random() * 6) + 1;
    randomDice2 = Math.floor(Math.random() * 6) + 1;
    
    images[0].src = `images/dice${randomDice}.png`;
    images[1].src = `images/dice${randomDice2}.png`;

    var title = document.querySelector("h1");

    if(randomDice === randomDice2) {
        title.innerHTML = "Draw";
    } else if (randomDice > randomDice2) {
        title.innerHTML = "🚩Player 1 wins!"
    } else {
       title.innerHTML = "Player 2 wins!🚩"
    }
});