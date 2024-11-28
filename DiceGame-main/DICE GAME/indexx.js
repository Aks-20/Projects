// Generate a random number between 1 and 6 for Player 1
var randomnumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

// Construct the image source path for Player 1
var randomimage = "dice" + randomnumber1 + ".png";
var randomimagesource = "images/" + randomimage; // images/dice1.png - images/dice6.png

// Select the first image element and set its source attribute
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource);

// Generate a random number between 1 and 6 for Player 2
var randomnumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

// Construct the image source path for Player 2
var randomimagesource2 = "images/dice" + randomnumber2 + ".png";

// Correctly set the source attribute for the second image element
document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2);

// Determine the winner and update the heading
if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}
