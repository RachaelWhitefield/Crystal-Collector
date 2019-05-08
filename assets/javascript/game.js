$(document).ready(function () {

    var blue = $("#blue");

    var green = $("#green");
    
    var pink = $("#pink");
    
    var yellow = $("#yellow");
    
    
    var blueNumber = random1Thru12();
    blue.on("click", function () {
        console.log(blueNumber)
    })
    
    var greenNumber = random1Thru12();
    green.on("click", function () {
        console.log(greenNumber)
    })

    var pinkNumber = random1Thru12();
    pink.on("click", function () {
        console.log(pinkNumber)
    })

    var yellowNumber = random1Thru12();
    yellow.on("click", function () {
        console.log(yellowNumber)
    })

   

    function random1Thru12() {
        return Math.floor(Math.random() * 12) + 1;
    }


    function random19Thru120() {
        return Math.floor(Math.random() * 120) + 19;
    }

var yourScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount =0;








// Global variables: wins, losses, target score, your score

// var score = yourScore + crystalValue;

//array of crystals to loop through, asign a value for each crystal

//Random number Function

    // assign a value for each crystal

// click event function

// Start/reset game
    // clear variables



































})