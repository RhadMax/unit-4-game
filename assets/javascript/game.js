// variables
var wins = 0;
var losses = 0;
var diamond = 0;
var spade = 0;
var heart = 0;
var club = 0;
var target = 0;
var score = 0;
var dHide = $(".d-hide");
var sHide = $(".s-hide");
var cHide = $(".c-hide");
var hHide = $(".h-hide");
var rules = $(".rules"); 

//mouseover rules to display
$(".underlined").hover(function () {
    console.log("test");
    rules.toggle();
});

//reset function ---
function reset() {
    score = 0;
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
    $("#dealers").text(target);
    $("#scored").text(score);
    $("#win").text(wins);
    $("#loss").text(losses);
};

//inital run of reset function to initialize game values for first play

reset();

//on click of reset button if user wants to start over fresh. Includes a confirm popup window that checks for true so user can confirm they want to start over and reset win/loss counters.

$("#resetter").on("click", function () {
    var areYouSure = confirm("Are you sure you want to start over? Your recorded wins and losses will be set back to 0.")
    if (areYouSure) {
        reset();
        wins = 0;
        losses = 0;
        $("#win").text(wins);
        $("#loss").text(losses);
    }
});

//on click block for gameplay
console.log("target: " + target);
console.log("score: " + score);

$(".btn").on("click", function () {
    console.log($(this).val());
    if ($(this).val() === "diamond") {
        score += diamond
        dHide.animate({ opacity: .5 }, 100);
        dHide.animate({ opacity: 0 }, 100);
        $("#scored").text(score);
        console.log("score: " + score);
    }
    if ($(this).val() === "spade") {
        score += spade
        sHide.animate({ opacity: .5 }, 100);
        sHide.animate({ opacity: 0 }, 100);
        $("#scored").text(score);
        console.log("score: " + score);
    }
    if ($(this).val() === "club") {
        score += club
        cHide.animate({ opacity: .5 }, 100);
        cHide.animate({ opacity: 0 }, 100);
        $("#scored").text(score);
        console.log("score: " + score);
    }
    if ($(this).val() === "heart") {
        score += heart
        hHide.animate({ opacity: .5 }, 100);
        hHide.animate({ opacity: 0 }, 100);
        $("#scored").text(score);
        console.log("score: " + score);
    }
    if ($(this).val() === "luck") {
        score += heart
        hHide.animate({ opacity: .5 }, 100);
        hHide.animate({ opacity: 0 }, 100);
        cHide.animate({ opacity: .5 }, 100);
        cHide.animate({ opacity: 0 }, 100);
        sHide.animate({ opacity: .5 }, 100);
        sHide.animate({ opacity: 0 }, 100);
        dHide.animate({ opacity: .5 }, 100);
        dHide.animate({ opacity: 0 }, 100);
        $("#scored").text(score);
        console.log("score: " + score);
    }
    if (score === target) {
        wins++;
        reset();
    }
    if (score > target) {
        losses ++;
        reset();
    }
});


