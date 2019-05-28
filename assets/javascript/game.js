// variables
var wins = 0;
var losses = 0;
var diamond = 0;
var spade = 0;
var heart = 0;
var club = 0;
var target = 0;
var score = 0;

//reset function ---
function reset() {
    target = (Math.floor(Math.random() * 102)) + 19;
    console.log(target);
    diamond = (Math.floor(Math.random() * 12)) + 1;
    console.log("diamond: " + diamond);
    spade = (Math.floor(Math.random() * 12)) + 1;
    console.log("spade: " + spade);
    heart = (Math.floor(Math.random() * 12)) + 1;
    console.log("heart: " + heart);
    club = (Math.floor(Math.random() * 12)) + 1;
    console.log("club: " + club);
};

//inital run of reset function to initialize game values for first play

reset();

//on click of reset button if user wants to start over fresh. Includes a confirm popup window that checks for true so user can confirm they want to start over and reset win/loss counters.

$("#resetter").on("click", function() {
 var areYouSure = confirm("Are you sure you want to start over? Your recorded wins and losses will be set back to 0.")
 if (areYouSure) {
     reset();
     wins = 0;
     losses = 0;
 }
});

//on click block for gameplay

$(".btn").on("click", function() {
console.log($(this).val());
});


