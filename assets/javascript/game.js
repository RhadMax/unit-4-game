// variables
var wins = 0;
var losses = 0;
var diamond = 0;
var spade = 0;
var heart = 0;
var club = 0;
var target = 0;
var score = 0;

//reset function
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

//on click block for gameplay

