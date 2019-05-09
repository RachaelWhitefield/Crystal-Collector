

$(document).ready(function () {

    var blue = $("#blue");

    var green = $("#green");
    
    var pink = $("#pink");
    
    var yellow = $("#yellow");

    var wins = document.getElementById("wins");
    
    
    var blueNumber = random1Thru12();
    blue.on("click", function () {
        currentScore += blueNumber;
        $("#current-score").text(currentScore);
        if (currentScore > targetScore) {
            console.log("Sorry, You Lose");
            resetGame();
            alert("Sorry, You Lose.");
        }
        
        else if (currentScore === targetScore) {
            resetGame();
            alert("Yay! You Won!");
        }
        console.log(blueNumber)
    })
    
    var greenNumber = random1Thru12();
    green.on("click", function () {
        currentScore += greenNumber;
        $("#current-score").text(currentScore);
        if (currentScore > targetScore) {
            console.log("Sorry, You Lose");
            resetGame();
            alert("Sorry, You Lose.");
        }
        
        else if (currentScore === targetScore) {
            resetGame();
            alert("Yay! You Won!");
        }
        console.log(greenNumber)
    })

    var pinkNumber = random1Thru12();
    pink.on("click", function () {
        currentScore += pinkNumber;
        $("#current-score").text(currentScore);
        if (currentScore > targetScore) {
            console.log("Sorry, You Lose");
            resetGame();
            alert("Sorry, You Lose.");
        }
        
        else if (currentScore === targetScore) {
            resetGame();
            alert("Yay! You Won!");
        }
        console.log(pinkNumber);
    })

    var yellowNumber = random1Thru12();
    yellow.on("click", function () {
        currentScore += yellowNumber;
        $("#current-score").text(currentScore);
        console.log("target score " + targetScore);
        console.log("current-score " + currentScore);
        if (currentScore > targetScore) {
            console.log("Sorry, You Lose");
            resetGame();
            alert("Sorry, You Lose.");
        }
        
        else if (currentScore === targetScore) {
            resetGame();
            alert("Yay! You Won!");
        }
            console.log(yellowNumber);
    })

   

    function random1Thru12() {
        return Math.floor(Math.random() * 12) + 1;
    }


    function random19Thru120() {
        return Math.floor(Math.random() * 120) + 19;
    }

    var getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

var currentScore = 0;
var targetScore = getRandom(19, 120);
$("#target-score").text(targetScore);
console.log("This is the target score " + targetScore)

var winCount = 0;
var lossCount = 0;



var resetGame = function() {
    currentScore = 0;
    $("#current-score").text(0);
    targetScore = getRandom(19, 120);
    yellowNumber = getRandom(1, 12);
    pinkNumber = getRandom(1, 12);
    greenNumber = getRandom(1, 12);
    blueNumber = getRandom(1, 12);
    $("#target-score").text(targetScore);

    // crystal.blue.value = getRandom(1, 12);
    // crystal.green.value = getRandom(1, 12);
    // crystal.pink.value = getRandom(1, 12);
    // crystal.yellow.value = getRandom(1, 12);

    
}





// Global variables: wins, losses, target score, your score

// var score = yourScore + crystalValue;

//array of crystals to loop through, asign a value for each crystal

//Random number Function

    // assign a value for each crystal

// click event function

// Start/reset game
    // clear variables

})